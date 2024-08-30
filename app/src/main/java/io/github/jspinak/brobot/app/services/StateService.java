package io.github.jspinak.brobot.app.services;

import io.github.jspinak.brobot.app.database.DatabaseCheckService;
import io.github.jspinak.brobot.app.database.databaseMappers.StateEntityMapper;
import io.github.jspinak.brobot.app.database.entities.StateEntity;
import io.github.jspinak.brobot.app.database.repositories.StateRepo;
import io.github.jspinak.brobot.app.web.requests.StateRequest;
import io.github.jspinak.brobot.app.web.responseMappers.StateResponseMapper;
import io.github.jspinak.brobot.app.web.responses.StateResponse;
import io.github.jspinak.brobot.datatypes.state.state.State;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

    public StateService(StateRepo stateRepo, StateEntityMapper stateEntityMapper) {
        this.stateRepo = stateRepo;
        this.stateEntityMapper = stateEntityMapper;
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
    public boolean removeState(String stateName) {
        Optional<StateEntity> stateDTO = stateRepo.findByName(stateName);
        if (stateDTO.isEmpty()) {
            System.out.println("State does not exist.");
            return false;
        }
        stateRepo.delete(stateDTO.get());
        return true;
    }

    @Transactional
    public boolean removeState(State state) {
        if (state == null) return false;
        return removeState(state.getName());
    }

    @Transactional(readOnly = true)
    public List<State> getAllInProject(Long projectId) {
        return stateRepo.findByProjectId(projectId).stream()
                //.map(stateMapper::map)
                .map(stateEntityMapper::map)
                .collect(Collectors.toList());
    }
}
