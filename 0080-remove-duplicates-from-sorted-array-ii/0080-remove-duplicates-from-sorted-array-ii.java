class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 0;
        int cnt = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i != 0 && nums[i-1] != nums[i]) {
                cnt = 0;
            }
            if (cnt >= 2) {
                continue;
            }
            nums[k++] = nums[i];
            cnt++;
        }
        return k;
    }
}