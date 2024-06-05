/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorElem = 0;
    let cnt = 0;

    for (const num of nums) {
        if (cnt === 0) {
            majorElem = num;
        }

        if (majorElem === num) {
            cnt++;
        } else {
            cnt--;
        }
    }

    return majorElem;
};