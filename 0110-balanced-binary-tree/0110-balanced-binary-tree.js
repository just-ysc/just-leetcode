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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;

    if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};

const getDepth = (root) => {
    if (!root) return 0;
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}