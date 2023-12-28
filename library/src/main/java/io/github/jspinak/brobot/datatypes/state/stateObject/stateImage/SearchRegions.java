package io.github.jspinak.brobot.datatypes.state.stateObject.stateImage;

import io.github.jspinak.brobot.datatypes.primitives.region.Region;
import lombok.Getter;

import java.util.*;

/**
 * SearchRegions allows for multiple Regions to be associated with an Image. This
 * could be useful when you are not sure where an Image may be but want to exclude
 * an area, or when the desired search area cannot be described by one rectangle.
 */
@Getter
public class SearchRegions {

    private List<Region> regions = new ArrayList<>();
    /**
     * The fixed region is usually defined when an image with a fixed location is found for the first time.
     * This region is then used in future FIND operations with the associated image.
     */
    private Region fixedRegion = new Region();

    /**
     * If the fixed region has been set.
     * @return true if set.
     */
    public boolean isFixedRegionSet() {
        return fixedRegion.isDefined();
    }

    public void setFixedRegion(Region region) {
        fixedRegion = region;
    }

    public void resetFixedRegion() {
        fixedRegion = new Region();
    }

    /**
     * Return the fixed region if defined.
     * Otherwise, return the first defined region.
     * If no regions are defined, return an undefined region.
     * @return one region.
     */
    public Region getOneRegion() {
        List<Region> regions = getRegions(true);
        if (regions.size() == 1) return regions.get(0);
        for (Region region : regions) {
            if (region.isDefined()) return region;
        }
        return new Region();
    }

    /**
     * When the image has a fixed location, if
     * - a region is defined, it is returned
     * - no region is defined, a random search region is returned
     * @param fixed if the image has a fixed location
     * @return the search region
     */
    public Region getFixedIfDefinedOrRandomRegion(boolean fixed) {
        List<Region> regions = getRegions(fixed);
        Random rand = new Random(regions.size());
        return regions.get(rand.nextInt());
    }

    /**
     * When the image has a fixed location, if
     * - a region is defined, it is returned
     * - no region is defined, all search regions are returned
     * @param fixed if the image has a fixed location
     * @return the search regions
     */
    public List<Region> getRegions(boolean fixed) {
        if (!fixed) return regions;
        if (fixedRegion.isDefined()) return List.of(fixedRegion);
        return regions;
    }

    public void setSearchRegions(List<Region> searchRegions) {
        regions = new ArrayList<>();
        addSearchRegions(searchRegions);
    }

    public void setSearchRegion(Region searchRegion) {
        regions = new ArrayList<>();
        addSearchRegions(searchRegion);
    }

    public List<Region> getAllRegions() {
        if (!regions.isEmpty()) return regions;
        return Collections.singletonList(new Region());
    }

    public void addSearchRegions(Region... searchRegions) {
        addSearchRegions(List.of(searchRegions));
    }

    public void addSearchRegions(List<Region> searchRegions) {
        for (Region region : searchRegions) {
            regions.addAll(trimRegion(region));
        }
        regions = Region.mergeAdjacent(regions);
    }

    /**
     * @return true if fixed region or any search region is defined.
     */
    public boolean isDefined() {
        if (fixedRegion.isDefined()) return true;
        for (Region region : regions) {
            if (region.isDefined()) return true;
        }
        return false;
    }

    /**
     * @param fixed does the pattern have a fixed position
     * @return true if fixed and has been found, or if not fixed and one of the search regions is defined
     */
    public boolean isDefined(boolean fixed) {
        if (fixed) return fixedRegion.isDefined();
        return isDefined();
    }

    public boolean isEmpty() {
        return regions.isEmpty();
    }

    public SearchRegions getDeepCopy() {
        SearchRegions searchRegions = new SearchRegions();
        regions.forEach(reg -> searchRegions.addSearchRegions(
                new Region(reg.getX(), reg.getY(), reg.getW(), reg.getH())));
        return searchRegions;
    }

    /**
     * Newly added regions may overlap with existing regions. To make sure duplicated matches are not returned
     * due to overlapping regions, a newly added region should be trimmed if it overlaps with an existing region.
     */
    private List<Region> trimRegion(Region newRegion) {
        for (Region region : regions) {
            if (region.overlaps(newRegion)) return newRegion.minus(region);
        }
        return List.of(newRegion);
    }

    public boolean equals(SearchRegions searchRegions) {
        int size = regions.size();
        int size2 = searchRegions.getRegions().size();
        if (size != size2) return false;
        for (int i=0; i<size; i++) {
            if (!regions.get(i).equals(searchRegions.getRegions().get(i))) return false;
        }
        if (!fixedRegion.equals(searchRegions.getFixedRegion())) return false;
        return true;
    }
}
