package io.github.jspinak.brobot.database.primitives;

import io.github.jspinak.brobot.database.primitives.location.Location;
import org.sikuli.script.Match;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Distance {

    private double dist(double a, double b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }

    private List<Integer> getDistPair(Location loc1, Location loc2) {
        List<Integer> distPair = new ArrayList<>();
        distPair.add(loc2.getX() - loc1.getX());
        // the y difference is the opposite on the computer screen as in a cartesian plane
        distPair.add(loc1.getY() - loc2.getY());
        //System.out.print("|cartesian dist x.y "+distPair.get(0)+"."+distPair.get(1)+" ");
        return distPair;
    }

    private double getDist(List<Integer> distPair) {
        return dist(distPair.get(0), distPair.get(1));
    }

    private double getDegree(List<Integer> distPair) {
        return Math.toDegrees(Math.atan2((double)distPair.get(1), (double)distPair.get(0)));
    }

    public double euclidean(Location loc1, Location loc2) {
        return getDist(getDistPair(loc1, loc2));
    }

    public double euclidean(Location loc, Match match) {
        return getDist(getDistPair(loc, new Location(match)));
    }

    public double getAngle(Location loc) {
        return getAngle(new Location(0,0), loc);
    }

    public double getAngle(Match match) {
        return getAngle(new Location(0,0), match);
    }

    public double getAngle(Location loc1, Location loc2) {
        return getDegree(getDistPair(loc1, loc2));
    }

    public double getAngle(Location loc, Match match) {
        return getDegree(getDistPair(loc, new Location(match)));
    }

    /**
     * Calculates the difference between the angles of 2 vectors.
     * Vector 1: start->loc1
     * Vector 2: start->loc2
     *
     * @param start the start point for both vectors
     * @param loc1 the end point for vector1
     * @param loc2 the end point for vector2
     * @return the angle to go from vector1 to vector2
     */
    public double getAngleBetween(Location start, Location loc1, Location loc2) {
        double angle1 = euclidean(start, loc1);
        double angle2 = euclidean(start, loc2);
        return angle2 - angle1;
    }

    public double getAngleBetween(Location loc1, Location loc2) {
        return getAngleBetween(new Location(0,0), loc1, loc2);
    }
}
