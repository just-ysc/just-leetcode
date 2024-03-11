class Solution {
    public int romanToInt(String s) {
        int result = 0;
        Map<Character, Integer> romanToIntMap = new HashMap<>();
        romanToIntMap.put('I', 1);
        romanToIntMap.put('V', 5);
        romanToIntMap.put('X', 10);
        romanToIntMap.put('L', 50);
        romanToIntMap.put('C', 100);
        romanToIntMap.put('D', 500);
        romanToIntMap.put('M', 1000);

        for (int i = 0; i < s.length(); i++) {
            int romanToInt = romanToIntMap.get(s.charAt(i));
            if (i < s.length() - 1 && (romanToInt < romanToIntMap.get(s.charAt(i + 1)))) {
                result -= romanToInt;
            } else {
                result += romanToInt;
            }
        }
        
        return result;
    }
}