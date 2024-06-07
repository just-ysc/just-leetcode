/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const check = new Array(10000).fill(false);

    for (const num of nums) {
        check[num] = true;
    }

    for (let i = 0; i < nums.length + 1; i++) {
        if (!check[i]) return i;
    }
    return -1;
};