export const productExceptSelf = (nums: number[]) => {
  const allProduct = nums.reduce((p, n) => p * n );

  return nums.map(n => allProduct / n);
}
