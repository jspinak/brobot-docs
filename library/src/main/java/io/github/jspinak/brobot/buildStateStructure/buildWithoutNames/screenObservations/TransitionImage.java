package io.github.jspinak.brobot.buildStateStructure.buildWithoutNames.screenObservations;

import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import lombok.Getter;
import lombok.Setter;
import org.bytedeco.opencv.opencv_core.Mat;
import org.sikuli.script.Match;

import java.util.*;

/**
 * This image transitions to the screenshot with the given id.
 * In an environment with static states, there may be many images that transition to a given screenshot.
 */
@Getter
@Setter
public class TransitionImage {

    private int indexInRepo; // index in the TransitionImageRepo
    private boolean checked = false; // when checked, if id == 0 then it doesn't transition anywhere
    private Map<Integer, Integer> fromScreenToScreen = new HashMap<>(); // transitions from and to the screenshots with these ids
    private List<Integer> screensFound = new ArrayList<>();
    private Region region; //
    private Mat image; // the underlying image
    private int ownerState; // the owner state. there is only one owner state.
    private Set<Integer> transitionsTo = new HashSet<>(); // all states transitioned to
    private List<String> textInMatches = new ArrayList<>();

    public TransitionImage() {
        this.checked = false;
    }

    private void addTextFromMatch(String text) {
        this.textInMatches.add(text);
    }

    public String getAllText() {
        StringBuilder allText = new StringBuilder();
        for (int i=0; i<textInMatches.size(); i++) {
            if (i>0) allText.append(" ");
            allText.append(textInMatches.get(i));
        }
        return allText.toString();
    }

    /**
     * Add the word match to the TransitionImage match. This expands the area of the match to include the
     * match parameter and adds its text to textInMatches.
     * @param match the match to include
     */
    public void addWordMatch(Match match) {
        boolean newMatch = this.region == null;
        if (newMatch) {
            this.region = new Region(match);
        }
        region.setAsUnion(new Region(match));
        addTextFromMatch(match.getText());
    }

    /**
     * Evaluates the new word match with respect to the current word region.
     * @param match the new word match
     * @param minDist a minimum distance measure for various comparison metrics
     * @return true if the new word match should be part of the current word region.
     */
    public boolean isSameWordGroup(Match match, int minDist) {
        if (region == null) return true; // region hasn't been created yet
        int xDist = match.x - region.getX2(); // x-distance between end of the current region and the start of the new word match
        int yDist = match.y - region.y; // y-distance between the beginning of both region and match
        return match.x - region.x > 0 && xDist < minDist && Math.abs(yDist) < minDist;
    }
}
