import { TreeNode } from '../../data-structures/tree-node';

export function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let depth = 1;
  if (!root.left && !root.right) {
    return depth;
  }

  let searchQueues: TreeNode[] = [root.left, root.right].filter((n) => n);

  while (searchQueues.length > 0) {
    const newSearchQueues: TreeNode[] = [];
    depth++;
    for (const node of searchQueues) {
      if (!node.left && !node.right) {
        return depth;
      } else {
        newSearchQueues.push(...[node.left, node.right].filter((n) => n));
      }
    }
    searchQueues = newSearchQueues;
  }

  return depth;
}
