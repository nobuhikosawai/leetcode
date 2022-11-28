import { ListNode } from '../../data-structures/list-node';

// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let noDup: ListNode | null = new ListNode(head.val);
  let node: ListNode | null = noDup;

  while (true) {
    head = head.next;

    if (!head) {
      break;
    }

    if (node.val !== head.val) {
      node.next = new ListNode(head.val);
      node = node.next;
    }
  }

  return noDup;
}
