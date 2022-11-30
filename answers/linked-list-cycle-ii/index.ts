import { ListNode } from '../../data-structures/list-node';

// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/
export function detectCycle(head: ListNode | null): ListNode | null {
  // const visited = new Set<ListNode>();
  //
  // while (head) {
  //   if (visited.has(head)) {
  //     return head;
  //   }
  //   visited.add(head);
  //   head = head.next;
  // }
  //
  // return null;

  let slow = head;
  let fast = head;
  let intr = null;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      intr = slow;
      break;
    }
  }

  if (!intr) {
    return null;
  }

  while (head !== intr) {
    head = head.next;
    intr = intr.next;
  }

  return head;
}
