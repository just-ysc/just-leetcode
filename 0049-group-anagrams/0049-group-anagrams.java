class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> groupMap = new HashMap<>();
        for (String str : strs) {
            char[] cArr = str.toCharArray();
            Arrays.sort(cArr);
            String sortedStr = new String(cArr);
            if (!groupMap.containsKey(sortedStr)) {
                groupMap.put(sortedStr, new ArrayList<String>());
            }
            groupMap.get(sortedStr).add(str);
        }
        return new ArrayList<List<String>>(groupMap.values());
    }
}