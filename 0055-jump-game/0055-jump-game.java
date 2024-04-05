class Solution {
    public boolean canJump(int[] nums) {
        int canMove = 0;
        for (int num : nums) {
            if (canMove < 0) return false;
            canMove = Math.max(canMove, num) - 1;
        }
        return true;
    }
}