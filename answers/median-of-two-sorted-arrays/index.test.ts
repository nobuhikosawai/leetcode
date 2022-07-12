import { findMedianSortedArrays } from './index';

describe('Median of Two Sorted Arrays', () => {
  test('test1', () => {
    const nums1 = [1, 3],
      nums2 = [2];
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.0);
  });

  test('test2', () => {
    const nums1 = [1, 2],
      nums2 = [3, 4];
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.5);
  });

  test('test3', () => {
    const nums1 = [0, 0, 0, 0, 0],
      nums2 = [-1, 0, 0, 0, 0, 0, 1];
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(0.0);
  });

  test('test4', () => {
    const nums1: number[] = [],
      nums2 = [1];
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(1.0);
  });

  test('test5', () => {
    const nums1 = [3],
      nums2 = [-2, -1];
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(-1.0);
  });
});
