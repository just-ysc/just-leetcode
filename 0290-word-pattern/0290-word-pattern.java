class Solution {
    public boolean wordPattern(String pattern, String s) {
        Map<Character, String> patternToWord = new HashMap<>();
        Map<String, Character> wordToPattern = new HashMap<>();
        String[] words = s.split(" ");
        
        if (words.length != pattern.length()) return false;

        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern.charAt(i);
            String word = words[i];
            Character mappedPattern = wordToPattern.get(word);
            String mappedWord = patternToWord.get(c);

            if (mappedWord != null && !word.equals(mappedWord)) {
                return false;
            }

            if (mappedPattern != null && c != Character.valueOf(mappedPattern)) {
                return false;
            }
            
            patternToWord.put(c, word);
            wordToPattern.put(word, c);
        }

        return true;
    }
}