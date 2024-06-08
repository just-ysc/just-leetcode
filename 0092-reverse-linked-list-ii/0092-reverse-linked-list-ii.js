/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (left === right) return head;
    const dummyHead = new ListNode(-1, head);
    let cur = dummyHead;

    let src;
    for (let i = 0; i < left; i++) {
        if (i === left - 1) src = cur;
        cur = cur.next;
    }

    for (let i = 0; i < right - left; i++) {
        const tmp = cur.next;
        cur.next = cur.next.next;
        tmp.next = src.next;
        src.next = tmp;
    }

    return dummyHead.next;
};