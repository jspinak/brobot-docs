package io.github.jspinak.brobot.app.services;

import io.github.jspinak.brobot.app.database.databaseMappers.StateEntityMapper;
import io.github.jspinak.brobot.app.database.entities.*;
import io.github.jspinak.brobot.app.database.repositories.*;
import io.github.jspinak.brobot.app.exceptions.EntityNotFoundException;
import io.github.jspinak.brobot.app.web.requests.StateRequest;
import io.github.jspinak.brobot.app.web.responseMappers.StateResponseMapper;
import io.github.jspinak.brobot.datatypes.state.state.State;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Manages the State repository.
 * Saves new states and retrieves states given the state name. StateEnums are typically used as state names
 *   for state structures built with named image files, or manually built state structures. Strings are used
 *   for state structures created at run-time or dynamically evolving state structures.
 **/
@Service
public class StateService {

    private static final Logger logger = LoggerFactory.getLogger(StateService.class);

    private final StateRepo stateRepo;
    private final StateEntityMapper stateEntityMapper;
    private final StateImageService stateImageService;
    private final ProjectService projectService;
    private final ProjectRepository projectRepository;
    private final StateResponseMapper stateResponseMapper;

    public StateService(StateRepo stateRepo, StateEntityMapper stateEntityMapper,
                        StateImageService stateImageService, ProjectService projectService,
                        ProjectRepository projectRepository, StateResponseMapper stateResponseMapper) {
        this.stateRepo = stateRepo;
        this.stateEntityMapper = stateEntityMapper;
        this.stateImageService = stateImageService;
        this.projectService = projectService;
        this.projectRepository = projectRepository;
        this.stateResponseMapper = stateResponseMapper;
    }

    @Transactional(readOnly = true)
    public Optional<State> getState(String name) {
        Optional<StateEntity> state = stateRepo.findByName(name);
        //return state.map(stateMapper::map);
        return state.map(stateEntityMapper::map);
    }

    @Transactional(readOnly = true)
    public Optional<StateEntity> getStateEntity(Long stateId) {
        return stateRepo.findById(stateId);
    }

    @Transactional(readOnly = true)
    public List<StateEntity> getAllStateEntities() {
        return stateRepo.findAll();
    }

    @Transactional(readOnly = true)
    public List<State> getAllStates() {
        return stateRepo.findAll().stream()
                .map(stateEntityMapper::map)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Set<String> getAllStateNames() {
        return getAllStates().stream()
                .map(State::getName)
                .collect(Collectors.toSet());
    }

    @Transactional(readOnly = true)
    public Set<State> findSetByName(String... stateNames) {
        Set<State> states = new HashSet<>();
        Stream.of(stateNames).forEach(name -> getState(name).ifPresent(states::add));
        return states;
    }

    @Transactional(readOnly = true)
    public Set<State> findSetByName(Set<String> stateNames) {
        return findSetByName(stateNames.toArray(new String[0]));
    }

    @Transactional(readOnly = true)
    public State[] findArrayByName(Set<String> stateNames) {
        return findArrayByName(stateNames.toArray(new String[0]));
    }

    @Transactional(readOnly = true)
    public State[] findArrayByName(String... stateNames) {
        List<State> states = new ArrayList<>();
        Stream.of(stateNames).forEach(name -> getState(name).ifPresent(states::add));
        return states.toArray(new State[0]);
    }

    /**
     * Adds a State to the repository.
     * Initial image processing can't take place here because, in the client app, the beans
     * are loaded before the bundle path can be set. Instead, initialization takes place in the
     * class "Init".
     *
     * @param state The State to add.
     */
    @Transactional
    public void save(State state) {
        if (state == null) return;
        logger.info("Before save: {}", state);
        StateEntity stateEntity = stateEntityMapper.map(state);
        stateRepo.save(stateEntity);
        logger.info("After save: {}", state);
        stateEntity.getStateImages().forEach(stateImageEntity -> stateImageEntity.setOwnerStateId(stateEntity.getId()));
    }

    public StateEntity save(StateEntity stateEntity) {
        return stateRepo.save(stateEntity);
    }

    @Transactional
    public void resetTimesVisited() {getAllStates().forEach(state -> state.setTimesVisited(0));
    }

    @Transactional
    public void deleteAllStates() {
        stateRepo.deleteAll();
    }

    @Transactional
    public void deleteState(Long stateId) {
        StateEntity state = stateRepo.findById(stateId)
                .orElseThrow(() -> new EntityNotFoundException("State not found"));

        // Delete associated StateImages
        stateImageService.deleteStateImagesByStateId(stateId);

        // Delete the state
        stateRepo.delete(state);
    }

    @Transactional(readOnly = true)
    public List<State> getAllInProject(Long projectId) {
        return stateRepo.findByProjectId(projectId).stream()
                //.map(stateMapper::map)
                .map(stateEntityMapper::map)
                .collect(Collectors.toList());
    }

    @Transactional
    public StateEntity createState(StateRequest stateRequest) {
        ProjectEntity projectEntity = projectRepository.findById(stateRequest.getProjectRequest().getId())
                .orElseThrow(() -> new RuntimeException("Project not found"));
        StateEntity state = stateResponseMapper.requestToEntity(stateRequest);
        state.setProject(projectEntity);
        Set<StateImageEntity> stateImages = stateImageService.createStateImages(stateRequest.getStateImages());
        state.setStateImages(stateImages);
        StateEntity savedState = stateRepo.save(state);
        projectEntity.addState(savedState);
        projectRepository.save(projectEntity);
        savedState.getStateImages().forEach(sI -> sI.setOwnerStateId(savedState.getId()));
        return savedState;
    }

    @Transactional
    public StateEntity moveStateImage(Long stateImageId, Long newStateId) {
        logger.info("Moving state image with ID {} to state with ID {}", stateImageId, newStateId);

        StateImageEntity stateImage = stateImageService.getStateImage(stateImageId);
        if (stateImage == null) {
            logger.error("StateImage with ID {} not found", stateImageId);
            throw new EntityNotFoundException("StateImage not found");
        }

        Long oldStateId = stateImage.getOwnerStateId();
        if (oldStateId == null || oldStateId == -1L) {
            logger.error("Invalid ownerStateId for StateImage: {}", stateImageId);
            throw new IllegalStateException("Invalid ownerStateId for StateImage");
        }

        StateEntity oldState = stateRepo.findById(oldStateId)
                .orElseThrow(() -> {
                    logger.error("Old State with ID {} not found", oldStateId);
                    return new EntityNotFoundException("Old State not found");
                });

        StateEntity newState = stateRepo.findById(newStateId)
                .orElseThrow(() -> {
                    logger.error("New State with ID {} not found", newStateId);
                    return new EntityNotFoundException("New State not found");
                });

        logger.info("Removing state image from old state (ID: {})", oldState.getId());
        oldState.getStateImages().remove(stateImage);
        stateRepo.save(oldState);

        logger.info("Adding state image to new state (ID: {})", newState.getId());
        stateImage.setOwnerStateId(newStateId);
        stateImage.setOwnerStateName(newState.getName());
        newState.getStateImages().add(stateImage);

        logger.info("Saving updated new state");
        StateEntity updatedState = stateRepo.save(newState);

        logger.info("Updating state image");
        stateImageService.updateStateImage(stateImage);

        logger.info("State image successfully moved");
        return updatedState;
    }

    public List<StateEntity> getStatesByProject(Long projectId) {
        Long projId = projectId == null ? 0L : projectId;
        ProjectEntity project = projectService.getProjectById(projId);
        return new ArrayList<>(project.getStates());
    }

}
