import { minDepth } from '.';
import { arrayToTreeNode } from '../../data-structures/tree-node';

describe('minimum-depth-of-binary-tree', () => {
  it('test 1', () => {
    const input = [3, 9, 20, null, null, 15, 7];
    const res = 2;
    const root = arrayToTreeNode(input);
    expect(minDepth(root)).toEqual(res);
  });

  it('test 2', () => {
    const input = [2, null, 3, null, 4, null, 5, null, 6];
    const res = 5;
    const root = arrayToTreeNode(input);
    expect(minDepth(root)).toEqual(res);
  });
  it('test3', () => {
    const input = [1, 2, 3, 4, 5];
    const res = 2;
    const root = arrayToTreeNode(input);
    expect(minDepth(root)).toEqual(res);
  });
});
