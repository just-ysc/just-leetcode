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
var isValidBST = function(root) {
    if (!root) return true;
    
    return validLeft(root, root.left) && validRight(root, root.right) && isValidBST(root.left) && isValidBST(root.right);
};

function validLeft(root, child) {
    if (!child) return true;
    return (root.val > child.val) && validLeft(root, child.left) && validLeft(root, child.right);
}

function validRight(root, child) {
    if (!child) return true;
    return (root.val < child.val) && validRight(root, child.left) && validRight(root, child.right);
}