// 1. Two Sum
// https://github.com/nobuhikosawai/leetcode/pull/1

export const twoSum = (
  nums: number[],
  target: number
): number[] | undefined => {
  let res;
  let indexMap = new Map<number, number>();

  nums.some((n, i) => {
    const targetNum = target - n;
    const foundIndex = indexMap.get(targetNum);
    if (foundIndex !== undefined && foundIndex !== i) {
      res = [foundIndex, i];
      return true;
    }
    indexMap.set(n, i);
  });
  return res;
};
