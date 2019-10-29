export const twoSum = (nums: number[], target: number): number[] | undefined => {
  let res;
  nums.some((n, i) => {
    const targetNum = target - n;
    const filteredNums = [...nums.slice(i + 1)];
    const index = filteredNums.findIndex(el => el === targetNum);
    if (index > -1) {
      res = [i, index + i + 1]
      return true;
    }
  })
  return res;
}
