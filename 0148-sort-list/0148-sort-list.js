/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;
    const len = getLen(head);
    
    // get pivot
    const mid = Math.floor(len / 2);
    let pivot = head;
    let prevPivot = new ListNode(-1, pivot);
    for (let i = 0; i < mid; i++) {
        prevPivot = pivot;
        pivot = pivot.next;
    }
    prevPivot.next = pivot.next;
    pivot.next = null;
    

    let cur = head;

    // split list
    
    let leftHead = null;
    let leftTail = null;
    let rightHead = null;
    let rightTail = null;

    while (cur) {
        if (cur.val < pivot.val) {
            if (!leftHead) {
                leftHead = cur;
                leftTail = cur;
            } else {
                leftTail.next = cur;
                leftTail = leftTail.next;
            }
        } else {
            if (!rightHead) {
                rightHead = cur;
                rightTail = cur;
            } else {
                rightTail.next = cur;
                rightTail = rightTail.next;
            }
        }
        cur = cur.next;
    }
    if (leftTail) leftTail.next = null;
    if (rightTail) rightTail.next = null;
    
    const leftPartition = sortList(leftHead);
    const rightPartition = sortList(rightHead);

    pivot.next = rightPartition;

    if (leftPartition) {
        let leftTail = leftPartition;
        while (leftTail.next) {
            leftTail = leftTail.next;
        }
        leftTail.next = pivot;
        return leftPartition;
    }
    return pivot;
};

const getLen = head => {
    let lenChecker = head;
    let len = 0;
    while (lenChecker) {
        len++;
        lenChecker = lenChecker.next;
    }
    return len;
}