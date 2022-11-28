import { ListNode } from '../../data-structures/list-node';

// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  if (head.next && head.val === head.next.val) {
    head.next = head.next.next;
    deleteDuplicates(head);
  } else {
    deleteDuplicates(head.next);
  }

  return head;
}
