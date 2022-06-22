import { addTwoNumbers, ListNode } from './index';

const createListNode = (arr: number[]): ListNode | null => {
  const n = arr.shift();
  if (n == null) {
    return null;
  }
  return new ListNode(n, createListNode(arr));
};

describe('add-two-numbers', () => {
  test('case1', () => {
    const l1 = [2, 4, 3],
      l2 = [5, 6, 4],
      output = [7, 0, 8];

    expect(addTwoNumbers(createListNode(l1), createListNode(l2))).toEqual(
      createListNode(output)
    );
  });

  test('case2', () => {
    const l1 = [0],
      l2 = [0],
      output = [0];
    expect(addTwoNumbers(createListNode(l1), createListNode(l2))).toEqual(
      createListNode(output)
    );
  });

  test('case3', () => {
    const l1 = [9, 9, 9, 9, 9, 9, 9],
      l2 = [9, 9, 9, 9],
      output = [8, 9, 9, 9, 0, 0, 0, 1];

    expect(addTwoNumbers(createListNode(l1), createListNode(l2))).toEqual(
      createListNode(output)
    );
  });

  test('case4', () => {
    const l1 = [
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ],
      l2 = [5, 6, 4],
      output = [
        6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ];

    expect(addTwoNumbers(createListNode(l1), createListNode(l2))).toEqual(
      createListNode(output)
    );
  });
});
