package io.github.jspinak.brobot.datatypes.primitives.match;

import io.github.jspinak.brobot.datatypes.primitives.location.Location;
import io.github.jspinak.brobot.datatypes.primitives.location.Positions;
import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import io.github.jspinak.brobot.datatypes.state.stateObject.otherStateObjects.StateRegion;
import io.github.jspinak.brobot.datatypes.state.stateObject.stateImage.StateImage;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MatchTest {

    private Match match = new Match.Builder()
            .setRegion(0, 50, 100, 20)
            .build();
    private StateRegion stateRegion = new StateRegion.Builder()
            .withSearchRegion(match.getRegion())
            .addAnchor(Positions.Name.TOPLEFT, Positions.Name.BOTTOMLEFT)
            .build();

    @Test
    void getLocation() {
        Match newMatch = new Match.Builder()
                .setMatch(match)
                .setStateObjectData(stateRegion)
                .build();
        Location location = newMatch.getLocation();
        System.out.println(newMatch);
        System.out.println(location);

        assertEquals(match.x(), newMatch.x());
        assertEquals(match.x() + match.w() / 2, location.getX());
        assertEquals(match.y() + match.h() / 2, location.getY());
    }

    @Test
    void toStateImage() {
        StateImage stateImage = match.toStateImage();
        assertEquals(50, stateImage.getLargestDefinedFixedRegionOrNewRegion().y());
    }

}