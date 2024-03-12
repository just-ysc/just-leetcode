class Solution {
    public int lengthOfLastWord(String s) {
        return Arrays.stream(s.split(" "))
        .map(word -> word.length())
        .filter(wordLength -> wordLength > 0)
        .reduce(0, (_, cur) -> cur);
    }
}