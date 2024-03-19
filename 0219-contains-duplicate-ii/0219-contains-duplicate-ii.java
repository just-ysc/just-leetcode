class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Map<Integer, Integer> duplMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (duplMap.containsKey(nums[i]) && Math.abs(duplMap.get(nums[i]) - i) <= k) {
                return true;
            }
            duplMap.put(nums[i], i);
        }
        return false;
    }
}