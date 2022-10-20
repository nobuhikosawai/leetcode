import { TreeNode } from '../../data-structures/tree-node';

// 617. Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/

export function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) {
    return null;
  }

  const newNode = new TreeNode((root1?.val ?? 0) + (root2?.val ?? 0));
  newNode.left = mergeTrees(root1?.left, root2?.left);
  newNode.right = mergeTrees(root1?.right, root2?.right);

  return newNode;
}
