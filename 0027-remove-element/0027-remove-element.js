/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let snowballSize = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            snowballSize++;
        } else if (snowballSize > 0) {
            [nums[i], nums[i - snowballSize]] = [nums[i - snowballSize], nums[i]];
        }
    }
    return nums.length - snowballSize;
};