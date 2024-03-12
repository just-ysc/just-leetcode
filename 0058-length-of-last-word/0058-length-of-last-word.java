class Solution {
    public int lengthOfLastWord(String s) {
        int counter = 0;
        boolean newWord = false;
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == ' ') {
                newWord = true;
            } else {
                counter = newWord ? 1 : counter + 1;
                newWord = false;
            }
        }
        return counter;
    }
}