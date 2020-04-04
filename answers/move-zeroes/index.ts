export const moveZeroes = (nums: number[]): void => {
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0);
    }
  }
}
