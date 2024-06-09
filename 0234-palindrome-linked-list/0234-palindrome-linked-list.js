/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const stack = [];
    // runner and walker
    let runner = head;
    let walker = head;

    // stop until runner becomes null
    while (runner) {
        runner = runner.next;
        if (runner) {
            runner = runner.next;
            stack.push(walker.val);
            walker = walker.next;
        } else {
            // total nodes are odd
            walker = walker.next;
        }
    }

    while (walker) {
        if (stack.pop() !== walker.val) return false;
        walker = walker.next;
    }

    return stack.length === 0;
};