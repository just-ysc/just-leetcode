/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (!nums.length) return [];
    const ranges = [];
    let start = {
        idx: 0,
        val: nums[0],
    };
    let current = {
        idx: 0,
        val: nums[0],
    };

    while (start.idx < nums.length) {
        if ((current.idx === nums.length - 1) || (nums[current.idx + 1] - current.val !== 1)) {
            if (start.idx === current.idx) {
                ranges.push(start.val.toString());
            } else {
                ranges.push(`${start.val}->${current.val}`);
            }
            
            if (current.idx === nums.length - 1) break;
            const newIdx = current.idx + 1;
            const newVal = nums[newIdx];
            start = { idx: newIdx, val: newVal };
            current = { idx: newIdx, val: newVal };
        } else {
            current = { idx: current.idx + 1, val: nums[current.idx + 1] };
        }
    }
    return ranges;
};