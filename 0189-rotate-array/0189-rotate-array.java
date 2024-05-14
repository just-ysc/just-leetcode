class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        this.reverse(nums, 0, nums.length - k - 1);
        this.reverse(nums, nums.length - k, nums.length - 1);
        this.reverse(nums);
    }

    private void reverse(int[] nums) {
        this.reverse(nums, 0, nums.length - 1);
    }

    private void reverse(int[] nums, int start, int end) {
        if (start > end || start < 0) return;
        int len = end - start + 1;
        for (int i = 0; i < len / 2; i++) {
            int temp = nums[start + i];
            int opposite = end - i;
            nums[start + i] = nums[opposite];
            nums[opposite] = temp;
        }
    }
}