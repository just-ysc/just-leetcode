/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals = [];
    let intervalStart = intervals[0][0];
    let intervalEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervalEnd >= intervals[i][0]) {
            intervalEnd = intervals[i][1];
        } else {
            mergedIntervals.push([intervalStart, intervalEnd]);
            intervalStart = intervals[i][0];
            intervalEnd = intervals[i][1];
        }
    }
    mergedIntervals.push([intervalStart, intervalEnd]);
    return mergedIntervals;
};