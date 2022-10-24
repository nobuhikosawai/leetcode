import { coinChange } from '.';

describe('coin-change', () => {
  it('test1', () => {
    const coins = [1, 2, 5],
      amount = 11;
    const res = 3;
    expect(coinChange(coins, amount)).toEqual(res);
  });

  it('test2', () => {
    const coins = [2],
      amount = 3;
    const res = -1;
    expect(coinChange(coins, amount)).toEqual(res);
  });

  it('test3', () => {
    const coins = [1],
      amount = 0;
    const res = 0;
    expect(coinChange(coins, amount)).toEqual(res);
  });

  it('test4', () => {
    const coins = [2, 5],
      amount = 11;
    const res = 4;
    expect(coinChange(coins, amount)).toEqual(res);
  });
});
