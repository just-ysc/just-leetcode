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
var postorderTraversal = function(root) {
    const traverse = (root, answer = []) => {
        if (!root) return [];
        traverse(root.left, answer);
        traverse(root.right, answer);
        answer.push(root.val);
        return answer;
    }

    return traverse(root);
};