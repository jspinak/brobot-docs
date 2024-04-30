package io.github.jspinak.brobot.app.buildWithoutNames.stateStructureBuildManagement;

import io.github.jspinak.brobot.app.buildWithoutNames.buildStateStructure.ScreenStateCreator;
import io.github.jspinak.brobot.app.buildWithoutNames.buildStateStructure.StateStructureInfo;
import io.github.jspinak.brobot.app.buildWithoutNames.screenObservations.GetScreenObservation;
import io.github.jspinak.brobot.app.buildWithoutNames.screenObservations.GetScreenObservationFromScreenshot;
import io.github.jspinak.brobot.app.buildWithoutNames.screenObservations.GetUsableArea;
import io.github.jspinak.brobot.app.buildWithoutNames.screenObservations.ScreenObservations;
import io.github.jspinak.brobot.datatypes.primitives.image.Pattern;
import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class BuildStateStructureFromScreenshots {

    private final GetUsableArea getUsableArea;
    private final GetScreenObservation getScreenObservation;
    private final GetScreenObservationFromScreenshot getScreenObservationFromScreenshot;
    private final ScreenStateCreator screenStateCreator;
    private final StateStructureInfo stateStructureInfo;
    private final ScreenObservations screenObservations;

    public BuildStateStructureFromScreenshots(GetUsableArea getUsableArea,
                                              GetScreenObservation getScreenObservation,
                                              GetScreenObservationFromScreenshot getScreenObservationFromScreenshot,
                                              ScreenStateCreator screenStateCreator,
                                              StateStructureInfo stateStructureInfo,
                                              ScreenObservations screenObservations) {
        this.getUsableArea = getUsableArea;
        this.getScreenObservation = getScreenObservation;
        this.getScreenObservationFromScreenshot = getScreenObservationFromScreenshot;
        this.screenStateCreator = screenStateCreator;
        this.stateStructureInfo = stateStructureInfo;
        this.screenObservations = screenObservations;
    }

    public void build(List<Pattern> screenshots, Pattern topLeftBoundary, Pattern bottomRightBoundary) {
        if (screenshots.isEmpty()) return;
        Region usableArea = getUsableArea.defineInFile(
                screenshots.get(0), topLeftBoundary, bottomRightBoundary);
        getScreenObservation.setUsableArea(usableArea);
        screenshots.forEach(screenshot -> screenObservations.addScreenObservation(
                getScreenObservationFromScreenshot.getNewScreenObservation(screenshot)));
        screenStateCreator.createAndSaveStatesAndTransitions();
        stateStructureInfo.printStateStructure();
    }

    public void build(StateStructureTemplate stateStructureTemplate) {
        build(stateStructureTemplate.getScreenshots(), stateStructureTemplate.getTopLeftBoundary(),
                stateStructureTemplate.getBottomRightBoundary());
    }
}
