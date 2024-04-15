class Solution {
    public int longestConsecutive(int[] nums) {
        Map<Integer, Boolean> seqMap = new HashMap<>();

        for (int num : nums) {
            seqMap.put(num, true);
        }

        for (Integer key : seqMap.keySet()) {
            if (seqMap.containsKey(key - 1)) {
                seqMap.put(key, false);
            }
        }

        int maxLen = 0;
        for (Integer key : seqMap.keySet()) {
            if (!seqMap.get(key)) continue;
            int cnt = 1;
            while (seqMap.containsKey(++key)) {
                cnt++;
            }
            maxLen = Math.max(maxLen, cnt);
        }

        return maxLen;
    }
}