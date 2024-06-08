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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let answer = 0;
    const queue = [root];
    while (queue.length) {
        const queueLen = queue.length;
        for (let i = 0; i < queueLen; i++) {
            const head = queue.shift();
            if (head.left) {
                if (!head.left.left && !head.left.right) {
                    answer += head.left.val;
                } else {
                    queue.push(head.left);
                }
            }
            if (head.right) {
                queue.push(head.right);
            }
        }
    }
    return answer;
};