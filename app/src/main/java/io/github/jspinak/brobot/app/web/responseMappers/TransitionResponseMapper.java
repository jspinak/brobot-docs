package io.github.jspinak.brobot.app.web.responseMappers;

import io.github.jspinak.brobot.app.database.databaseMappers.ActionDefinitionEntityMapper;
import io.github.jspinak.brobot.app.database.entities.TransitionEntity;
import io.github.jspinak.brobot.app.web.requests.TransitionCreateRequest;
import io.github.jspinak.brobot.app.web.requests.TransitionUpdateRequest;
import io.github.jspinak.brobot.app.web.responses.TransitionResponse;
import org.springframework.stereotype.Component;

@Component
public class TransitionResponseMapper {

    private final ActionDefinitionResponseMapper actionDefinitionResponseMapper;

    public TransitionResponseMapper(ActionDefinitionResponseMapper actionDefinitionResponseMapper) {
        this.actionDefinitionResponseMapper = actionDefinitionResponseMapper;
    }

    public TransitionResponse toResponse(TransitionEntity entity) {
        TransitionResponse response = new TransitionResponse();
        response.setId(entity.getId());
        response.setSourceStateId(entity.getSourceStateId());
        response.setTargetStateId(entity.getTargetStateId());
        response.setStateImageId(entity.getStateImageId());
        response.setStaysVisibleAfterTransition(entity.getStaysVisibleAfterTransition());
        response.setActivate(entity.getActivate());
        response.setExit(entity.getExit());
        response.setScore(entity.getScore());
        response.setTimesSuccessful(entity.getTimesSuccessful());
        response.setActionDefinition(actionDefinitionResponseMapper.toResponse(entity.getActionDefinition()));
        return response;
    }

    public TransitionEntity toEntity(TransitionCreateRequest request) {
        TransitionEntity entity = new TransitionEntity();
        updateEntityFromRequest(entity, request);
        return entity;
    }

    public void updateEntityFromRequest(TransitionEntity entity, TransitionCreateRequest request) {
        entity.setSourceStateId(request.getSourceStateId());
        entity.setTargetStateId(request.getTargetStateId());
        entity.setStateImageId(request.getStateImageId());
        entity.setStaysVisibleAfterTransition(request.getStaysVisibleAfterTransition());
        entity.setActivate(request.getActivate());
        entity.setExit(request.getExit());
        entity.setScore(request.getScore());
        entity.setTimesSuccessful(request.getTimesSuccessful());
        entity.setActionDefinition(actionDefinitionResponseMapper.fromRequest(request.getActionDefinition()));
    }

    public void updateEntityFromRequest(TransitionEntity entity, TransitionUpdateRequest request) {
        if (request.getSourceStateId() != null) entity.setSourceStateId(request.getSourceStateId());
        if (request.getTargetStateId() != null) entity.setTargetStateId(request.getTargetStateId());
        if (request.getStateImageId() != null) entity.setStateImageId(request.getStateImageId());
        if (request.getStaysVisibleAfterTransition() != null) entity.setStaysVisibleAfterTransition(
                request.getStaysVisibleAfterTransition());
        if (request.getActivateStateIds() != null) entity.setActivate(request.getActivateStateIds());
        if (request.getExitStateIds() != null) entity.setExit(request.getExitStateIds());
        if (request.getScore() != null) entity.setScore(request.getScore());
        if (request.getTimesSuccessful() != null) entity.setTimesSuccessful(request.getTimesSuccessful());
        if (request.getActionDefinition() != null) entity.setActionDefinition(
                actionDefinitionResponseMapper.fromRequest(request.getActionDefinition()));
    }
}