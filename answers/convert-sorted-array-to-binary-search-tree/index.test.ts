import { sortedArrayToBST } from '.';
import { arrayToTreeNode } from '../../data-structures/tree-node';

describe('convert-sorted-array-to-binary-search-tree', () => {
  it('test1', () => {
    const input = [-10, -3, 0, 5, 9];
    const out = [0, -3, 9, -10, null, 5];
    const res = arrayToTreeNode(out);
    expect(JSON.stringify(sortedArrayToBST(input))).toEqual(
      JSON.stringify(res)
    );
  });

  it('test2', () => {
    const input = [1, 3];
    const out = [3, 1];
    const res = arrayToTreeNode(out);
    expect(JSON.stringify(sortedArrayToBST(input))).toEqual(
      JSON.stringify(res)
    );
  });
});
