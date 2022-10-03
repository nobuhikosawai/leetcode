/**
 * Definition for a binary tree node.
 */
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

export function maxDepth(root: TreeNode | null): number {
  let maxDepth = 0;

  function search(node: TreeNode | null, depth: number): number {
    if (!node) {
      if (depth > maxDepth) {
        maxDepth = depth;
      }
      return depth;
    }

    depth++;
    [node.left, node.right].forEach((n) => {
      return search(n, depth);
    });
  }

  search(root, maxDepth);

  return maxDepth;
}
