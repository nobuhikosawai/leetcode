export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function createTreeNode(value: number | null): TreeNode | null {
  return value === null ? null : new TreeNode(value);
}

export function arrayToTreeNode(arr: Array<number | null>): TreeNode | null {
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
        t.left = arr[i] ? createTreeNode(arr[i]) : null;
        t.right = arr[i + 1] ? createTreeNode(arr[i + 1]) : null;
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
