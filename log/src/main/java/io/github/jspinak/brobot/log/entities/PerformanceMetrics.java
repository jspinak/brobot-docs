package io.github.jspinak.brobot.log.entities;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class PerformanceMetrics {
    private long actionDuration;
    private long pageLoadTime;
    private long transitionTime;
    private long totalTestDuration;
}
