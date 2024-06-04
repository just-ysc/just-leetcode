/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const answer = [];
    dfs(root, answer);
    return answer;
};

function dfs(root, answer) {
    if (!root) return;
    dfs(root.left, answer);
    answer.push(root.val);
    dfs(root.right, answer);
}