/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let nextL1 = l1, nextL2 = l2, carryover = 0, headNode, prevNode;

  while (nextL1 || nextL2 || carryover) {
    const sum = (nextL1?.val ?? 0) + (nextL2?.val ?? 0) + carryover;

    let val: number
    if (sum >= 10) {
      val = sum % 10;
      carryover = 1;
    } else {
      val = sum;
      carryover = 0;
    }

    const node = new ListNode(val, null)

    if (prevNode) {
      prevNode.next = node
    } else {
      headNode = node
    }

    prevNode = node
    nextL1 = nextL1?.next
    nextL2 = nextL2?.next
  }

  return headNode;
};
