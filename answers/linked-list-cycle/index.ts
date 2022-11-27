import { ListNode } from '../../data-structures/list-node';

// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/description/
// export function hasCycle(head: ListNode | null): boolean {
//   const set = new Set<ListNode>();
//   while (head) {
//     if (set.has(head)) {
//       return true;
//     }
//     set.add(head);
//     head = head.next;
//   }
//   return false;
// }

// Floyd's Cycle Finding Algorithm
export function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}
