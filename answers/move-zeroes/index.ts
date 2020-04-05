// https://leetcode.com/problems/move-zeroes
// TODO: following code can be rewritten simpler.
export const moveZeroes = (nums: number[]): void => {
  let i = 0;
  let j = 0;
  while(true) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0);
      i--; // to rewind.
    }
    i++;
    j++;
    if (j >= nums.length) {
      break;
    }
  }
}
