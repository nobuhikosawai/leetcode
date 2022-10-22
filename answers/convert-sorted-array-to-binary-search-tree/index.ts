import { TreeNode } from '../../data-structures/tree-node';

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }

  const middleIdx = Math.floor(nums.length / 2);
  const medium = nums[middleIdx];

  const tree = new TreeNode(medium);

  tree.left = sortedArrayToBST(nums.slice(0, middleIdx));
  tree.right = sortedArrayToBST(nums.slice(middleIdx + 1, nums.length));

  return tree;
}
