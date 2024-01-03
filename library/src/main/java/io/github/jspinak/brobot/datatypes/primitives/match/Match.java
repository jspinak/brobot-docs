package io.github.jspinak.brobot.datatypes.primitives.match;

import io.github.jspinak.brobot.actions.methods.basicactions.find.color.pixelAnalysis.Scene;
import io.github.jspinak.brobot.datatypes.primitives.image.Pattern;
import io.github.jspinak.brobot.datatypes.primitives.location.Anchors;
import io.github.jspinak.brobot.datatypes.primitives.location.Location;
import io.github.jspinak.brobot.datatypes.primitives.location.Position;
import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import io.github.jspinak.brobot.datatypes.state.stateObject.StateObject;
import io.github.jspinak.brobot.imageUtils.MatOps;
import lombok.Getter;
import lombok.Setter;
import org.bytedeco.opencv.opencv_core.Mat;
import org.bytedeco.opencv.opencv_core.Rect;

import java.lang.reflect.Field;
import java.time.LocalDateTime;
import java.util.Optional;

/**
 * Simplified version of the MatchObject of versions 1.0.6 and earlier.
 * Removed: action duration
 * Simplified: Text is a String and not a Text object.
 * Replaced:
 * - StateImage with Pattern. This is more granular, since a find action searches for Pattern objects.
 * - sceneName with scene.
 *
 *  * Match is used to store information about new Pattern matches. It includes:
 *  *   The SikuliX Match
 *  *   The String found during text detection
 *  *   The StateObject used in the Find operation
 *  *   The time the MatchObject was created
 *  *
 *  *   This object is similar to MatchSnapshot but has the following differences:
 *  *     Match objects always have successful matches, whereas Snapshots can have failed matches.
 *  *     Snapshots are contained within Image objects and StateRegions. Match objects include
 *  *       a StateObject as a variable.
 *  *     Match objects have only one match, as opposed to Snapshots, which can have
 *  *       multiple Match objects.
 */
@Getter
@Setter
public class Match extends org.sikuli.script.Match {

    private String name = "";
    /*
    The Mat in a Match object contains the pixels from the match region. This can be different from
    the image used to search with (similarity may be low, or the match area might be shifted).
    Also, some operations do not use an image to search, and are interested in the contents of the
    screen.
     */
    private Mat mat;
    /*
    For simplicity, one String is used to represent text here. While it may be a stochastic variable (text read from
    the screen may differ at different readings), the processing of the text read can be performed before creating
    a MatchObject. If an action has multiple iterations, each can be saved as a Match with a single String for text.
     */
    private String text;
    /*
    This is the pattern used to find the match. It may be different from the mat.
     */
    private Pattern pattern;
    /*
    The match may have come from a Region, in which case it won't have a Pattern object. The anchors are recorded here,
    regardless of which object created the match.
     */
    private Anchors anchors;
    private StateObject stateObject;
    private Mat histogram;
    private Scene scene;
    private LocalDateTime timeStamp;
    // the old MatchObject had `private double duration;`

    public Match(org.sikuli.script.Match match) {
        super(match);
        this.setName(match.getName());
    }

    public Match(Region region) {
        super(region.toMatch());
    }

    public Match(int x, int y, int w, int h) {
        super(new org.sikuli.script.Match(new org.sikuli.script.Region(x, y, w, h), .99));
    }

    public Location getLocation() {
        if (pattern == null) {
            Position tempPosition = new Position(50,50);
            return new Location(this, tempPosition);
        }
        return new Location(this, pattern.getPosition());
    }

    public int compareByScore(Match m) {
        return (int)(this.getScore() - m.getScore());
    }

    public int size() {
        if (pattern == null) return 0;
        return pattern.w()*pattern.h();
    }

    public void setMatWithScene() {
        if (scene == null) return;
        Optional<Mat> mat = MatOps.applyIfOk(scene.getBgr(), new Region(this).getJavaCVRect());
        mat.ifPresent(this::setMat);
    }

    @Override
    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("M[");
        String nameText = "";
        if (name != null && !name.isEmpty()) {
            nameText = "#" + name + "# ";
        }
        stringBuilder.append(String.format("%sR[%d,%d %dx%d] simScore:%.1f", nameText, this.x, this.y, this.w, this.h, super.getScore()));
        if (text != null && !text.isEmpty()) stringBuilder.append(" text:").append(text);
        stringBuilder.append("]");
        return stringBuilder.toString();
    }


    /*
    This is a workaround. It is generally a bad idea to set variables like this.
    TODO: ask Raimund to code a setter for simScore
     */
    public void setSimScore(double simScore) {
        try {
            // Get the "simScore" field from the superclass (Match)
            Field simScoreField = org.sikuli.script.Match.class.getDeclaredField("simScore");

            // Make the field accessible, even if it is private
            simScoreField.setAccessible(true);

            // Set the value of the field in this instance
            simScoreField.set(this, simScore);
        } catch (NoSuchFieldException | IllegalAccessException e) {
            // Handle exceptions (e.g., NoSuchFieldException, IllegalAccessException)
            e.printStackTrace();
        }
    }

    public static class Builder {
        private org.sikuli.script.Match match;
        private String name;
        private String text;
        private Pattern pattern;
        private Anchors anchors;
        private StateObject stateObject;
        private Mat histogram;
        private Scene scene;
        private LocalDateTime timeStamp;
        private double simScore;

        public Builder setMatch(org.sikuli.script.Match match) {
            this.match = match;
            return this;
        }

        public Builder setMatch(Region region) {
            this.match = new org.sikuli.script.Match(region, .99);
            return this;
        }

        public Builder setMatch(Rect rect) {
            this.match = new org.sikuli.script.Match(new Region(rect), .99);
            return this;
        }

        public Builder setMatch(int x, int y, int w, int h) {
            this.match = new org.sikuli.script.Match(new Region(x, y, w, h), .99);
            return this;
        }

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setText(String text) {
            this.text = text;
            return this;
        }

        public Builder setPattern(Pattern pattern) {
            this.pattern = pattern;
            if (this.name == null || this.name.isEmpty()) this.name = pattern.getName();
            return this;
        }

        public Builder setAnchors(Anchors anchors) {
            this.anchors = anchors;
            return this;
        }

        public Builder setStateObject(StateObject stateObject) {
            this.stateObject = stateObject;
            return this;
        }

        public Builder setHistogram(Mat histogram) {
            this.histogram = histogram;
            return this;
        }

        public Builder setScene(Scene scene) {
            this.scene = scene;
            return this;
        }

        public Builder setSimScore(double simScore) {
            this.simScore = simScore;
            return this;
        }

        public Match build() {
            Match matchObject = new Match(match);
            matchObject.name = name;
            matchObject.text = text;
            matchObject.pattern = pattern;
            matchObject.anchors = anchors;
            matchObject.stateObject = stateObject;
            matchObject.histogram = histogram;
            matchObject.scene = scene;
            matchObject.timeStamp = LocalDateTime.now();
            matchObject.setMatWithScene();
            matchObject.setSimScore(simScore);
            return matchObject;
        }

    }

}
