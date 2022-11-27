import { hasCycle } from '.';
import { createListNode, ListNode } from '../../data-structures/list-node';

function lastNode(listNode: ListNode): ListNode {
  if (!listNode.next) {
    return listNode;
  }
  return lastNode(listNode.next);
}

function connect(listNode: ListNode, pos: number) {
  if (pos < 0) {
    return;
  }

  const l = lastNode(listNode);

  function findPos(listNode: ListNode, i: number): ListNode {
    if (i === pos) {
      return listNode;
    }
    i++;
    return findPos(listNode.next, i);
  }

  const p = findPos(listNode, 0);
  l.next = p;
}

describe('linked-list-cycle', () => {
  it('test1', () => {
    const head = [3, 2, 0, -4],
      pos = 1;
    const output = true;
    const listNode = createListNode(head);
    connect(listNode, pos);
    expect(hasCycle(listNode)).toEqual(output);
  });
  it('test2', () => {
    const head = [1, 2],
      pos = 0;
    const output = true;
    const listNode = createListNode(head);
    connect(listNode, pos);
    expect(hasCycle(listNode)).toEqual(output);
  });
  it('test3', () => {
    const head = [1],
      pos = -1;
    const output = false;
    const listNode = createListNode(head);
    connect(listNode, pos);
    expect(hasCycle(listNode)).toEqual(output);
  });
});
