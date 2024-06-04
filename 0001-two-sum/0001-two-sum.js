/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const idxMap = new Map();

    for (const [idx, num] of nums.entries()) {
        if (idxMap.has(target - num)) {
            return [idxMap.get(target - num), idx];
        }
        idxMap.set(num, idx);
    }
};