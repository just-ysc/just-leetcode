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
    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> averageList = new ArrayList<>();
        Queue<TreeNode> nodeQueue = new LinkedList<>();
        nodeQueue.add(root);
        while (!nodeQueue.isEmpty()) {
            double sum = 0.0;
            int cnt = 0;
            int queueSize = nodeQueue.size();
            for (int i = 0; i < queueSize; i++) {
                TreeNode node = nodeQueue.remove();
                sum += Double.valueOf(node.val);
                cnt++;
                if (node.left != null) nodeQueue.add(node.left);
                if (node.right != null) nodeQueue.add(node.right);
            }
            averageList.add(sum / cnt);
        }
        return averageList;
    }
}