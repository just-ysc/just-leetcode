class Solution {
    public int rob(int[] nums) {
        int[] cache = new int[nums.length + 1];
        Arrays.fill(cache, Integer.MIN_VALUE);
        return maxRob(nums, cache, nums.length);
    }

    private int maxRob(int[] nums, int[] cache, int end) {
        if (end == 0) {
            return 0;
        }

        if (end == 1) {
            return nums[0];
        }

        if (cache[end] != Integer.MIN_VALUE) {
            return cache[end];
        }

        int result = Math.max(maxRob(nums, cache, end - 1), maxRob(nums, cache, end - 2) + nums[end - 1]);
        cache[end] = result;
        return result;
    }
}