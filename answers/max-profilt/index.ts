export const maxProfit = (nums: number[]): number => {
  let tmpBuy = 0;
  let totalProfit = 0;
  nums.forEach((n, i) => {
    if (tmpBuy <= 0) {
      tmpBuy = n;
    } else if (n - nums[i - 1] > 0) {
      totalProfit += (n - nums[i - 1])
    } else if (n - nums[i - 1] < 0){
      tmpBuy = n;
    }
  });
  return totalProfit;
};
