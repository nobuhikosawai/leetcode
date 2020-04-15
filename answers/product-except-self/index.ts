export const productExceptSelf = (nums: number[]) => {
  const allProduct = nums.reduce((p, n) => p * n );

  return nums.map(n => n === 0 ? 0 : allProduct / n);
}
