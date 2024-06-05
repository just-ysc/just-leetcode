/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (i >= m) {
            nums1[i] = nums2[j++];
        } else if (nums1[i] > nums2[j]) {
            let temp = nums1[i];
            nums1[i] = nums2[j];
            nums2[j] = temp;
        }
        i++;
    }
};