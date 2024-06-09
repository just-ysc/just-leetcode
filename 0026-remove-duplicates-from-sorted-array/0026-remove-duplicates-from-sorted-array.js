/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;
    let lenWithoutDuplicates = 1;
    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++;
        } else {
            nums[++i] = nums[j++];
            lenWithoutDuplicates++;
        }
    }
    return lenWithoutDuplicates;
};