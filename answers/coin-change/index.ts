// 322. Coin Change
// https://leetcode.com/problems/coin-change/
export function coinChange(coins: number[], amount: number): number {
  if (amount === 0) {
    return 0;
  }

  const sortedCoins = coins.sort((a, b) => {
    return b - a; // descending order
  });

  const helper = (amount: number, currentIdx: number): number => {
    const coin = sortedCoins[currentIdx];

    if (coin === amount) {
      return 1;
    } else if (coin > amount) {
      if (currentIdx + 1 >= sortedCoins.length) {
        return -1;
      }

      return helper(amount, currentIdx + 1);
    } else {
      const nextTarget = amount - coin;

      let res: number;
      let nextIndex = currentIdx;

      while (nextIndex < sortedCoins.length) {
        const _res = helper(nextTarget, nextIndex);

        if (_res > -1) {
          res = _res;
          break;
        }

        nextIndex++;
      }

      if (!res) {
        return -1;
      } else {
        return res + 1;
      }
    }
  };

  const currentIdx = 0;
  return helper(amount, currentIdx);
}
