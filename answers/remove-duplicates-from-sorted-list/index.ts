import { ListNode } from '../../data-structures/list-node';

// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;

  while (current) {
    if (current.next && current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}
