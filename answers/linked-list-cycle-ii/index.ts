import { ListNode } from '../../data-structures/list-node';

// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/
export function detectCycle(head: ListNode | null): ListNode | null {
  const visited = new Set<ListNode>();

  while (head) {
    if (visited.has(head)) {
      return head;
    }
    visited.add(head);
    head = head.next;
  }

  return null;
}
