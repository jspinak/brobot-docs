package io.github.jspinak.brobot.mock;

import io.github.jspinak.brobot.datatypes.primitives.match.Match;
import io.github.jspinak.brobot.datatypes.primitives.match.MatchHistory;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.util.Random;

import static io.github.jspinak.brobot.actions.actionOptions.ActionOptions.Action.GET_TEXT;

/**
 * Mock text for GetText Actions using Snapshots.
 */
@Component
public class MockText {

    private final MockTime mockTime;

    public MockText(MockTime mockTime) {
        this.mockTime = mockTime;
    }

    public String getString(Match match) {
        mockTime.wait(GET_TEXT);
        MatchHistory matchHistory = match.getPattern().getMatchHistory();
        if (matchHistory.getRandomSnapshot(GET_TEXT).isEmpty()) return getRandomString();
        return matchHistory.getRandomText();
    }

    public String getRandomString() {
        return getRandomString(new Random().nextInt(15));
    }

    public String getRandomString(int stringSize) {
        byte[] array = new byte[stringSize];
        new Random().nextBytes(array);
        return new String(array, StandardCharsets.UTF_8);
    }
}
