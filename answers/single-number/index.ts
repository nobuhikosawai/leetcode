// https://leetcode.com/problems/single-number/solution/

export const singleNumber = (nums: number[]): number => {
  let a = 0;

  nums.forEach((n) => {
    a ^= n;
  });

  return a;
};
