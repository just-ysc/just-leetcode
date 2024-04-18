/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head = new ListNode(0);
        ListNode current = head;
        int carryOver = 0;
        boolean first = true;

        do {
            if (!first) {
                current.next = new ListNode(0);
                current = current.next;
            }
            first = false;
            int v1 = l1 != null ? l1.val : 0;
            int v2 = l2 != null ? l2.val : 0;
            current.val = v1 + v2 + carryOver;
            if (current.val >= 10) {
                current.val -= 10;
                carryOver = 1;
            } else {
                carryOver = 0;
            }
            l1 = l1 == null ? null : l1.next;
            l2 = l2 == null ? null : l2.next;
        } while (l1 != null || l2 != null || carryOver != 0);

        return head;
    }
}