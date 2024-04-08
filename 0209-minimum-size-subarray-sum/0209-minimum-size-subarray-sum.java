class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int answer = Integer.MAX_VALUE;
        int i = 0;
        int sum  = 0;
        for (int j = 0; j < nums.length; j++) {
            sum += nums[j];
            System.out.println("i: " + i + " j: " + j + " sum: " + sum);
            if (sum >= target) {
                while (i < j) {
                    System.out.println("i: " + i + " j: " + j + " sum: " + sum);
                    if (sum - nums[i] < target) break;
                    sum -= nums[i];
                    i++;
                }
                answer = Math.min(answer, j - i + 1);
            }
        }
        
        return answer == Integer.MAX_VALUE ? 0 : answer;
    }
}