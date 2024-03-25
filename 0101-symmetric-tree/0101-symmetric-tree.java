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
    public boolean isSymmetric(TreeNode root) {
        return isMirrored(root.left, root.right);
    }

    private boolean isMirrored(TreeNode leftChild, TreeNode rightChild) {
        if (leftChild == null && rightChild == null) {
            return true;
        } else if (leftChild == null || rightChild == null) {
            return false;
        } else {
            return leftChild.val == rightChild.val && isMirrored(leftChild.left, rightChild.right) && isMirrored(leftChild.right, rightChild.left);
        }
    }
}