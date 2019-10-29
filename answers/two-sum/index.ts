export const twoSum = (nums: number[], target: number): number[] | undefined => {
  const sumMap = getSumMap(nums);
  return sumMap[target];
}

const getSumMap = (nums: number[]) => {
  const result: any = {};
  nums.forEach((n1, i) => {
    for(let _i = i + 1; _i <= nums.length; _i++) {
      const sum  = n1 + nums[_i];
      const indexes = [i, _i];
      result[sum] = indexes;
    }
  });
  return result;
}
