import { ListNode } from '../../data-structures/list-node';

// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/description/
export function hasCycle(head: ListNode | null): boolean {
  let visited: Record<number, ListNode[]> = {};

  function helper(head: ListNode | null): boolean {
    if (head === null) {
      return false;
    }
    const candidates = visited[head.val];
    if (candidates?.length > 0 && candidates.includes(head)) {
      return true;
    }

    if (!candidates) {
      visited[head.val] = [head];
    } else {
      candidates.push(head);
    }
    return helper(head.next);
  }

  return helper(head);
}
