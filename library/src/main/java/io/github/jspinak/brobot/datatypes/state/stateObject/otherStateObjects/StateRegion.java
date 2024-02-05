package io.github.jspinak.brobot.datatypes.state.stateObject.otherStateObjects;

import io.github.jspinak.brobot.datatypes.primitives.location.Anchor;
import io.github.jspinak.brobot.datatypes.primitives.location.Anchors;
import io.github.jspinak.brobot.datatypes.primitives.location.Position;
import io.github.jspinak.brobot.datatypes.primitives.location.Positions;
import io.github.jspinak.brobot.datatypes.primitives.match.MatchHistory;
import io.github.jspinak.brobot.datatypes.primitives.match.MatchSnapshot;
import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import io.github.jspinak.brobot.datatypes.state.ObjectCollection;
import io.github.jspinak.brobot.datatypes.state.stateObject.StateObject;
import jakarta.persistence.*;
import lombok.Data;

/**
 * A StateRegion belongs to a State and usually has a Region that
 * has a special meaning for its owner State. For example, there
 * may be text in this Region that doesn't appear in any other State.
 */
@Entity
@Data
public class StateRegion implements StateObject {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private StateObject.Type objectType = StateObject.Type.REGION;
    private String name = "";
    @OneToOne(cascade = CascadeType.ALL)
    private Region searchRegion = new Region();
    private String ownerStateName = "null";
    private int staysVisibleAfterClicked = 100;
    private int probabilityExists = 100; // probability something can be acted on in this region
    private int timesActedOn = 0;
    @Embedded
    private Position position = new Position(.5, .5); // click position within region
    @OneToOne(cascade = CascadeType.ALL)
    private Anchors anchors = new Anchors();
    private String mockText = "mock text";
    @OneToOne(cascade = CascadeType.ALL)
    private MatchHistory matchHistory = new MatchHistory();

    private StateRegion() {}

    public int x() {
        return searchRegion.x();
    }

    public int y() {
        return searchRegion.y();
    }

    public int w() {
        return searchRegion.w();
    }

    public int h() {
        return searchRegion.h();
    }

    public boolean defined() {
        return getSearchRegion().isDefined();
    }

    public void addTimesActedOn() {
        timesActedOn++;
    }

    public void addSnapshot(MatchSnapshot matchSnapshot) {
        matchHistory.addSnapshot(matchSnapshot);
    }

    public ObjectCollection asObjectCollection() {
        return new ObjectCollection.Builder()
                .withRegions(this)
                .build();
    }

    public static class Builder {
        private String name = "";
        private Region searchRegion = new Region();
        private String ownerStateName = "null";
        private Position position = new Position(.5, .5);

        // Positions.Name: the border of the region to define
        // Position: the location in the region to use as a defining point
        private Anchors anchors = new Anchors();
        private MatchHistory matchHistory = new MatchHistory();

        public Builder called(String name) {
            this.name = name;
            return this;
        }

        public Builder withSearchRegion(Region searchRegion) {
            this.searchRegion = searchRegion;
            return this;
        }

        public Builder withSearchRegion(int x, int y, int w, int h) {
            this.searchRegion = new Region(x, y, w, h);
            return this;
        }

        public Builder inState(String stateName) {
            this.ownerStateName = stateName;
            return this;
        }

        public Builder setPointLocation(Position position) {
            this.position = position;
            return this;
        }

        public Builder addAnchor(Positions.Name definedRegionBorder, Positions.Name positionInThisRegion) {
            this.anchors.add(new Anchor(definedRegionBorder, new Position(positionInThisRegion)));
            return this;
        }

        public Builder addAnchor(Positions.Name definedRegionBorder, Position location) {
            this.anchors.add(new Anchor(definedRegionBorder, location));
            return this;
        }

        public Builder addSnapshot(MatchSnapshot matchSnapshot) {
            this.matchHistory.addSnapshot(matchSnapshot);
            return this;
        }

        public StateRegion build() {
            StateRegion stateRegion = new StateRegion();
            stateRegion.name = name;
            stateRegion.searchRegion = searchRegion;
            stateRegion.ownerStateName = ownerStateName;
            stateRegion.position = position;
            stateRegion.anchors = anchors;
            stateRegion.matchHistory = matchHistory;
            return stateRegion;
        }

    }
}
