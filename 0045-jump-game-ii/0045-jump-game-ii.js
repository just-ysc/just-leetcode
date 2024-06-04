/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const minJump = new Array(nums.length).fill(Number.MAX_VALUE);
    minJump[0] = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= nums[i] && (i + j) < nums.length; j++) {
            // console.log(i, j, minJump[i + j], minJump[i] + 1);
            minJump[i + j] = Math.min(minJump[i + j], minJump[i] + 1);
            
        }
    }
    return minJump[minJump.length - 1];
};