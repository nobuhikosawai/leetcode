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
  const getNumber = (l: ListNode, i: number, agg: bigint): bigint => {
    agg = agg + BigInt(l.val) * (10n ** BigInt(i))

    if (l.next) {
      return getNumber(l.next, i + 1, agg)
    } else {
      return agg
    }
  }

  const num1 = getNumber(l1, 0, 0n)
  const num2 = getNumber(l2, 0, 0n)

  const res = num1 + num2


  const getListNode = (val: bigint): ListNode | null => {
    if (val === 0n) {
      return null;
    }
    const mod = val % 10n

    return new ListNode(Number(mod), getListNode((val - mod) / 10n))
  }

  return res === 0n ? new ListNode(0, null) : getListNode(res)
};
