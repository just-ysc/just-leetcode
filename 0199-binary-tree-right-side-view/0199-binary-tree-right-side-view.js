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
var rightSideView = function(root) {
    if (root === null) {
        return [];
    }
    const answer = [];
    let queue = [root];

    let startingPoint = 0;
    while (startingPoint < queue.length) {
        const queueLen = queue.length;
        answer.push(queue[queueLen - 1].val);
        for (let i = startingPoint; i < queueLen; i++) {
            const node = queue[i];
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        startingPoint = queueLen;
    }

    return answer;
};