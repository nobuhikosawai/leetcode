export const twoSum = (nums: number[], target: number): number[] | undefined => {
  let res;
  let indexMap = new Map<number, number>();

  // create indexMap
  nums.forEach((n, i) => {
    indexMap.set(n, i)
  });

  nums.some((n, i) => {
    const targetNum = target - n;
    const foundIndex = indexMap.get(targetNum);
    if(foundIndex && foundIndex !== i) {
      res = [i, foundIndex];
      return true
    }
  })
  return res;
}
