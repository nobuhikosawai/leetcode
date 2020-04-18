// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3300/
export const productExceptSelf = (nums: number[]) => {
  const numOfZero = nums.reduce((count, n) => {
    if (n === 0) {
      count += 1;
    }
    return count;
  }, 0);

  if (numOfZero >= 2) {
    return Array(nums.length).fill(0);
  }

  if (numOfZero === 1) {
    const allProductExceptZero = nums.reduce((p, n) => {
      if (n) {
        p *= n
      }
      return p;
    }, 1);
    
    return nums.map(n => n === 0 ? allProductExceptZero : 0);
  }

  const allProduct = nums.reduce((p, n) => p *= n);
  return nums.map(n => allProduct / n);
}
