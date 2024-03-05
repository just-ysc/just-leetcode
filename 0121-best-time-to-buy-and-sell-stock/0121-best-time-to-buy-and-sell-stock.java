class Solution {
    public int maxProfit(int[] prices) {
        int subMin = Integer.MAX_VALUE;
        int maxProfit = 0;
        int todayProfit = 0;

        for (int price : prices) {
            if (price < subMin) {
                subMin = price;
            }
            todayProfit = price - subMin;
            maxProfit = Math.max(maxProfit, todayProfit);
        }
        return maxProfit;
    }
}