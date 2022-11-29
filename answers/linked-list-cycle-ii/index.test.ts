import { detectCycle } from '.';
import { createListNode, ListNode } from '../../data-structures/list-node';

function lastNode(listNode: ListNode): ListNode {
  if (!listNode.next) {
    return listNode;
  }
  return lastNode(listNode.next);
}

function findPos(listNode: ListNode, pos: number, i: number): ListNode {
  if (i === pos) {
    return listNode;
  }
  i++;
  return findPos(listNode.next, pos, i);
}

function connect(listNode: ListNode, pos: number) {
  if (pos < 0) {
    return;
  }

  const l = lastNode(listNode);

  const p = findPos(listNode, pos, 0);
  l.next = p;
}

describe('linked-list-cycle', () => {
  it('test1', () => {
    const head = [3, 2, 0, -4],
      pos = 1;
    const listNode = createListNode(head);
    connect(listNode, pos);
    const output = findPos(listNode, pos, 0);
    expect(detectCycle(listNode)).toEqual(output);
  });

  it('test2', () => {
    const head = [1, 2],
      pos = 0;
    const listNode = createListNode(head);
    connect(listNode, pos);
    const output = findPos(listNode, pos, 0);
    expect(detectCycle(listNode)).toEqual(output);
  });

  it('test3', () => {
    const head = [1],
      pos = -1;
    const listNode = createListNode(head);
    connect(listNode, pos);
    const output: null = null;
    expect(detectCycle(listNode)).toEqual(output);
  });
});
