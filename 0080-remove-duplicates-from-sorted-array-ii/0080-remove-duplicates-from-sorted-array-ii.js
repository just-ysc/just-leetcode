/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let lenWithoutDuplicates = 1;
    let i = 0;
    let j = 1;
    let snowballSize = 0;

    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            if (snowballSize === 0) {
                snowballSize++;
                nums[++i] = nums[j++];
                lenWithoutDuplicates++;
            } else {
                j++;
            }
        } else {
            snowballSize = 0;
            nums[++i] = nums[j++];
            lenWithoutDuplicates++;
        }
    }

    return lenWithoutDuplicates;
};