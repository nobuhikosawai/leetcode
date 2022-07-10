// https://leetcode.com/problems/median-of-two-sorted-arrays/
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const sort = (arr1: number[], arr2: number[]) => {
    let i = 0,
      j = 0;
    const sorted = [];
    while (arr1.length + arr2.length > i + j) {
      const a = arr1[i] ?? Infinity,
        b = arr2[j] ?? Infinity;
      if (a >= b) {
        sorted.push(b);
        j++;
      } else {
        sorted.push(a);
        i++;
      }
    }
    return sorted;
  };

  let newNums1: number[], newNums2: number[];

  if (nums1.length > nums2.length) {
    const index = nums2.length + Math.ceil((nums1.length - nums2.length) / 2);

    newNums2 = sort([...nums1.slice(index)], nums2);
    newNums1 = nums1.slice(0, index);
  } else if (nums2.length > nums1.length) {
    const index = nums1.length + Math.ceil((nums2.length - nums1.length) / 2);

    newNums1 = sort([...nums2.slice(index)], nums1);
    newNums2 = nums2.slice(0, index);
  } else {
    newNums1 = nums1;
    newNums2 = nums2;
  }

  const sorted = sort(newNums1, newNums2);

  if (sorted.length % 2 === 0) {
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  } else {
    return sorted[Math.floor(sorted.length / 2)];
  }
}
