// https://leetcode.com/problems/median-of-two-sorted-arrays/
/* algorithm from the following sites
 * - https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/2471/Very-concise-O(log(min(MN)))-iterative-solution-with-detailed-explanation
 * - https://www.youtube.com/watch?v=LPFhl65R7ww
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const n1 = nums1.length;
  const n2 = nums2.length;
  const nHalf = Math.ceil((n1 + n2) / 2);

  if (n1 <= n2) {
    let minPartial = 0;
    let maxPartial = nums1.length;

    while (minPartial <= maxPartial) {
      const targetPartial = Math.floor((minPartial + maxPartial) / 2);
      const idx1 = targetPartial - 1;
      const idx2 = nHalf - (idx1 + 1) - 1;

      const l1 = nums1[idx1] ?? -Infinity,
        r1 = nums1[idx1 + 1] ?? +Infinity,
        l2 = nums2[idx2] ?? -Infinity,
        r2 = nums2[idx2 + 1] ?? +Infinity;

      if (l1 <= r2 && l2 <= r1) {
        if ((nums1.length + nums2.length) % 2 === 0) {
          return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
        } else {
          return Math.max(l1, l2);
        }
      } else if (l1 >= r2) {
        maxPartial = targetPartial - 1;
      } else {
        minPartial = targetPartial + 1;
      }
    }
  } else {
    return findMedianSortedArrays(nums2, nums1);
  }
}
