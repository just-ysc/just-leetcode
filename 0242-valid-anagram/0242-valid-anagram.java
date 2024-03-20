class Solution {
    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> alphaCntMap = new HashMap<>();
        for (char c : s.toCharArray()) {
            alphaCntMap.put(c, alphaCntMap.containsKey(c) ? alphaCntMap.get(c) + 1 : 1);
        }
        for (char c : t.toCharArray()) {
            if (!alphaCntMap.containsKey(c) || alphaCntMap.get(c) == 0) {
                return false;
            }
            alphaCntMap.put(c, alphaCntMap.get(c) - 1);
        }
        for (int cnt : alphaCntMap.values()) {
            if (cnt > 0) return false;
        }
        return true;
    }
}