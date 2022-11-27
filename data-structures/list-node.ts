// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const createListNode = (arr: number[]): ListNode | null => {
  const val = arr.shift();
  if (val === undefined) {
    return null;
  }
  return new ListNode(val, createListNode(arr));
};
