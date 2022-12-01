import { ListNode } from '../../data-structures/list-node';

// 82. Remove Duplicates from Sorted List II
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let sentinel = new ListNode(0, head);

  let pred = sentinel;

  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      pred.next = head.next;
    } else {
      pred = pred.next;
    }

    head = head.next;
  }

  return sentinel.next;
}
