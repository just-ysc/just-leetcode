class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (i1, i2) -> i1[0] - i2[0]);
        List<List<Integer>> mergedIntervals = new ArrayList<>();

        int start = intervals[0][0];
        int end = intervals[0][1];
        for (int[] interval : intervals) {
            if (interval[0] <= end) {
                start = Math.min(start, interval[0]);
                end = Math.max(end, interval[1]);
            } else {
                ArrayList<Integer> overlappedInterval = new ArrayList<>();
                overlappedInterval.add(start);
                overlappedInterval.add(end);
                mergedIntervals.add(overlappedInterval);
                start = interval[0];
                end = interval[1];
            }
        }

        ArrayList<Integer> overlappedInterval = new ArrayList<>();
        overlappedInterval.add(start);
        overlappedInterval.add(end);
        mergedIntervals.add(overlappedInterval);

        return mergedIntervals.stream()
                .map(interval -> interval.stream().mapToInt(i -> i).toArray())
                .toArray(int[][]::new);
    }
}