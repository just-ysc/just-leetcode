class Solution {
    public int hammingWeight(int n) {
        int base = (int) Math.pow(2, 30);
        int setBitCnt = 0;
        while (n > 0) {
            if (base <= n) {
                n -= base;
                setBitCnt++;
            }
            base /= 2;
        }
        return setBitCnt;
    }
}