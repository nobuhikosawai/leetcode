import { TreeNode } from '../../data-structures/tree-node';

type TreeNodeWithDepth = [TreeNode, number];

export function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const queue: TreeNodeWithDepth[] = [[root, 1]];

  let currentDepth = 1;
  while (queue.length > 0) {
    const [node, depth] = queue.shift();
    if (!node.left && !node.right) {
      currentDepth = depth;
      break;
    }

    if (node.left) {
      queue.push([node.left, depth + 1]);
    }

    if (node.right) {
      queue.push([node.right, depth + 1]);
    }
  }

  return currentDepth;
}
