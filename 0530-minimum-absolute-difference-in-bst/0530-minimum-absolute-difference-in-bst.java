/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int getMinimumDifference(TreeNode root) {
        if (root == null) return Integer.MAX_VALUE;
        TreeNode closestSmallNode = findClosestSmallNode(root);
        TreeNode closestLargeNode = findClosestLargeNode(root);
        int minimumOfThisLevel = Math.min(
            closestSmallNode == null ? Integer.MAX_VALUE : root.val - closestSmallNode.val,
            closestLargeNode == null ? Integer.MAX_VALUE : closestLargeNode.val - root.val
        );
        return Math.min(
            Math.min(getMinimumDifference(root.left), getMinimumDifference(root.right)),
            minimumOfThisLevel
        );
    }

    private TreeNode findClosestSmallNode(TreeNode root) {
        if (root == null || root.left == null) return null;
        TreeNode closestSmallNode = root.left;
        while (closestSmallNode.right != null) {
            closestSmallNode = closestSmallNode.right;
        }
        return closestSmallNode;
    }

    private TreeNode findClosestLargeNode(TreeNode root) {
        if (root == null || root.right == null) return null;
        TreeNode closestLargeNode = root.right;
        while (closestLargeNode.left != null) {
            closestLargeNode = closestLargeNode.left;
        }
        return closestLargeNode;
    }
}