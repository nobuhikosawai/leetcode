// 322. Coin Change
// https://leetcode.com/problems/coin-change/

const SOLUTION: 'topdown' | 'bottomup' = 'bottomup';

export function coinChange(coins: number[], amount: number): number {
  if (SOLUTION === 'topdown') {
    return helper(coins, amount, {});

    function helper(
      coins: number[],
      amount: number,
      cache: { [key: number]: number }
    ) {
      if (amount === 0) {
        return 0;
      }
      if (amount < 0) {
        return -1;
      }
      if (cache[amount] !== undefined) {
        return cache[amount];
      }

      let min = +Infinity;
      coins.forEach((coin) => {
        const res = helper(coins, amount - coin, cache);
        if (res >= 0 && res < min) {
          min = res + 1;
        }
      });
      cache[amount] = min === +Infinity ? -1 : min;

      return cache[amount];
    }
  } else {
    const res = Array(amount + 1).fill(+Infinity);
    res[0] = 0;

    for (let i = 1; i <= amount; i++) {
      coins.forEach((coin) => {
        if (i - coin >= 0) {
          res[i] = Math.min(res[i], res[i - coin] + 1);
        }
      });
    }

    return res[amount] === Infinity ? -1 : res[amount];
  }
}
