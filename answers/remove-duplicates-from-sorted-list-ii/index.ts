import { ListNode } from '../../data-structures/list-node';

// 82. Remove Duplicates from Sorted List II
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let prev = null;
  let dup = null;
  let current = head;

  while (current) {
    if (current.val === dup) {
      if (prev) {
        prev.next = current.next;
      } else {
        head = head.next;
      }
      current = current.next;
    } else if (current.val === current.next?.val) {
      dup = current.val;
      if (prev) {
        prev.next = current.next.next;
      } else {
        head = head.next.next;
      }
      current = current.next.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
}
