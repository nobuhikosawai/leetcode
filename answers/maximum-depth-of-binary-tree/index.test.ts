import { arrayToTreeNode } from '../../data-structures/tree-node';
import { maxDepth } from './index';

describe('maximum-depth-of-binary-tree', () => {
  it('test1', () => {
    const input = [3, 9, 20, null, null, 15, 7];
    const res = 3;
    const root = arrayToTreeNode(input);
    expect(maxDepth(root)).toEqual(res);
  });
  it('test2', () => {
    const input = [1, null, 2];
    const res = 2;
    const root = arrayToTreeNode(input);
    expect(maxDepth(root)).toEqual(res);
  });
});
