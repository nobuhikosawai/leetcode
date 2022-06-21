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
  const getValue = (l1: ListNode | null, l2: ListNode | null, carryover: number): ListNode => {
    if (!l1 && !l2 && !carryover) {
      return null;
    }

    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carryover;

    let val: number
    let nextCarryover: number
    if (sum >= 10) {
      val = sum % 10;
      nextCarryover = 1;
    } else {
      val = sum;
      nextCarryover = 0;
    }

    return new ListNode(val, getValue(l1?.next, l2?.next, nextCarryover));
  }

  return getValue(l1, l2, 0);
};
