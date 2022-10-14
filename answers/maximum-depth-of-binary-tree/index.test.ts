import { maxDepth, TreeNode } from './index';

function createTreeNode(value: number | null): TreeNode | null {
  return value === null ? null : new TreeNode(value);
}

function prepare(arr: Array<number | null>): TreeNode | null {
  let i = 0;
  let latestTrees: TreeNode[] = [];
  let root: TreeNode | null = null;

  while (i < arr.length) {
    if (latestTrees.length === 0) {
      root = createTreeNode(arr[i]);
      if (root) {
        latestTrees = [root];
        i++;
      } else {
        return null;
      }
    } else {
      const newLatestTrees: TreeNode[] = [];
      latestTrees.forEach((t) => {
        t.left = createTreeNode(arr[i]);
        t.right = createTreeNode(arr[i + 1]);
        if (t.left) {
          newLatestTrees.push(t.left);
        }
        if (t.right) {
          newLatestTrees.push(t.right);
        }
        i += 2;
      });
      latestTrees = newLatestTrees;
    }
  }

  return root;
}

describe('maximum-depth-of-binary-tree', () => {
  it('test1', () => {
    const input = [3, 9, 20, null, null, 15, 7];
    const res = 3;
    const root = prepare(input);
    expect(maxDepth(root)).toEqual(res);
  });
  it('test2', () => {
    const input = [1, null, 2];
    const res = 2;
    const root = prepare(input);
    expect(maxDepth(root)).toEqual(res);
  });
});
