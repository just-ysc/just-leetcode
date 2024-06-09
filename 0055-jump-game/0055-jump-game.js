/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const jumpMap = Array(nums.length).fill(false);
    jumpMap[0] = true;
    
    for (let i = 0; i < nums.length; i++) {
        if (!jumpMap[i]) continue;
        for (let j = 1; j <= nums[i]; j++) {
            if (i + j >= nums.length) break;
            jumpMap[i + j] = true;
        }
    }

    return jumpMap[nums.length - 1];
};