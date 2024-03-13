class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 1) return strs[0];
        StringBuilder sb = new StringBuilder();
        outer:
            for (int i = 0; i < strs[0].length(); i++) {
                char c = strs[0].charAt(i);
                for (int j = 1; j < strs.length; j++) {
                    if (strs[j].length() < i + 1 || strs[j].charAt(i) != c) {
                        break outer;
                    }
                }
                sb.append(c);
            }
        return sb.toString();
    }
}