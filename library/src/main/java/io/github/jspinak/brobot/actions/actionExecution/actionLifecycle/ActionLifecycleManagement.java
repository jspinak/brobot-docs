package io.github.jspinak.brobot.actions.actionExecution.actionLifecycle;

import io.github.jspinak.brobot.actions.actionOptions.ActionOptions;
import io.github.jspinak.brobot.actions.methods.time.TimeWrapper;
import io.github.jspinak.brobot.datatypes.primitives.match.Matches;
import io.github.jspinak.brobot.reports.Report;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class ActionLifecycleManagement {

    private final ActionLifecylceRepo actionLifecylceRepo;
    private final TimeWrapper timeWrapper;

    public ActionLifecycleManagement(ActionLifecylceRepo actionLifecylceRepo, TimeWrapper timeWrapper) {
        this.actionLifecylceRepo = actionLifecylceRepo;
        this.timeWrapper = timeWrapper;
    }

    /**
     * Creates a new ActionLifecycle object and adds it to the repo.
     * @param actionOptions ActionOptions object that contains all the information about the action.
     * @return id of the created ActionLifecycle object
     */
    public int newActionLifecycle(ActionOptions actionOptions, Matches matches) {
        ActionLifecycle actionLifecycle = new ActionLifecycle(actionOptions, timeWrapper.now());
        int id = actionLifecylceRepo.add(actionLifecycle);
        matches.setActionId(id);
        return id;
    }

    /**
     * Increments the number of completed repetitions of the action.
     * @param id id of the ActionLifecycle object
     */
    public void incrementCompletedRepetitions(int id) {
        actionLifecylceRepo.getActionLifecycles().get(id).incrementCompletedRepetitions();
    }

    /**
     * Sets the end time of the action.
     * @param id id of the ActionLifecycle object
     */
    public void setEndTime(int id, double maxWait) {
        actionLifecylceRepo.getActionLifecycles().get(id).setEndTime(timeWrapper.now().plusSeconds((long) maxWait));
    }

    public Duration getAndSetDuration(int id, double maxWait) {
        //setEndTime(id, maxWait);
        LocalDateTime start = actionLifecylceRepo.getActionLifecycles().get(id).getStartTime();
        LocalDateTime end = actionLifecylceRepo.getActionLifecycles().get(id).getEndTime();
        return Duration.between(start, end);
    }

    public Duration getCurrentDuration(int id) {
        LocalDateTime start = actionLifecylceRepo.getActionLifecycles().get(id).getStartTime();
        LocalDateTime end = timeWrapper.now();
        return Duration.between(start, end);
    }

    public boolean actionCompleted(int id) {
        return actionLifecylceRepo.getActionLifecycles().get(id).getEndTime() != null;
    }

    public int getCompletedRepetitions(int id) {
        return actionLifecylceRepo.getActionLifecycles().get(id).getCompletedRepetitions();
    }

    public ActionOptions getActionOptions(int id) {
        return actionLifecylceRepo.getActionLifecycles().get(id).getActionOptions();
    }

    /**
     * Continue the action if
     * - the max repetitions has not been reached
     * - the time has not expired
     * @param id id of the ActionLifecycle object
     * @return true if the action should be continued, false otherwise
     */
    private boolean isTimeLeftAndMoreRepsAllowed(int id) {
        int completedReps = getCompletedRepetitions(id);
        if (completedReps == 0) return true;
        int maxReps = getActionOptions(id).getMaxTimesToRepeatActionSequence();
        ActionOptions.Action action = getActionOptions(id).getAction();
        if (action != ActionOptions.Action.FIND && completedReps >= maxReps) {
            return false;
        }
        double maxWait = getActionOptions(id).getMaxWait();
        Duration duration = getCurrentDuration(id);
        return duration.getSeconds() <= maxWait;
    }

    public boolean isOkToContinueAction(Matches matches) {
        int id = matches.getActionId();
        if (!isTimeLeftAndMoreRepsAllowed(id)) return false;
        if (isFindFirstAndAtLeastOneMatchFound(matches)) return false;
        if (isFindEachFirstAndEachPatternFound(matches)) return false;
        return true;
    }

    public boolean isFindFirstAndAtLeastOneMatchFound(Matches matches) {
        return !matches.isEmpty() && getActionOptions(matches.getActionId()).getFind() == ActionOptions.Find.FIRST;
    }

    public boolean isFindEachFirstAndEachPatternFound(Matches matches) {
        if (matches.getActionOptions().getFind() != ActionOptions.Find.EACH) return false;
        if (matches.getActionOptions().getDoOnEach() != ActionOptions.DoOnEach.FIRST) return false;
        return getAllImagesFound(matches.getActionId());
    }

    public boolean getAllImagesFound(int id) {
        return actionLifecylceRepo.getActionLifecycles().get(id).isAllImagesFound();
    }

    public boolean setAllImagesFound(Matches matches, List<Matches> patternMatches) {
        int id = matches.getActionId();
        for (Matches onePatternMatch : patternMatches) {
            if (onePatternMatch.isEmpty()) {
                actionLifecylceRepo.getActionLifecycles().get(id).setAllImagesFound(false);
                return false;
            }
        }
        actionLifecylceRepo.getActionLifecycles().get(id).setAllImagesFound(true);
        return true;
    }

    public boolean printActionOnce(int id) {
        if (actionLifecylceRepo.getActionLifecycles().get(id).isPrinted()) {
            return false;
        }
        actionLifecylceRepo.getActionLifecycles().get(id).setPrinted(true);
        if (Report.minReportingLevel(Report.OutputLevel.LOW)) {
            if (getActionOptions(id).getAction() == ActionOptions.Action.FIND)
                System.out.format("Find.%s ", getActionOptions(id).getFind());
            else
                System.out.format("%s ", getActionOptions(id).getAction());
        }
        return true;
    }
}
