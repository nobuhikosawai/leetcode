import { deleteDuplicates } from '.';
import { createListNode } from '../../data-structures/list-node';

describe('remove-duplicates-from-sorted-list', () => {
  it('test1', () => {
    const head = [1, 2, 3, 3, 4, 4, 5];
    const output = [1, 2, 5];
    expect(deleteDuplicates(createListNode(head))).toEqual(
      createListNode(output)
    );
  });

  it('test2', () => {
    const head = [1, 1, 1, 2, 3];
    const output = [2, 3];
    expect(deleteDuplicates(createListNode(head))).toEqual(
      createListNode(output)
    );
  });

  it('test3', () => {
    const head = [1];
    const output = [1];
    expect(deleteDuplicates(createListNode(head))).toEqual(
      createListNode(output)
    );
  });

  it('test4', () => {
    const head = [1, 1, 1];
    expect(deleteDuplicates(createListNode(head))).toEqual(null);
  });
});
