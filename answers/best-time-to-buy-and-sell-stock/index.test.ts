import { maxProfit } from '.';

describe('best-time-to-buy-and-sell-stock', () => {
  test('test1', () => {
    const input = [7, 1, 5, 3, 6, 4];
    const res = 5;
    expect(maxProfit(input)).toEqual(res);
  });

  test('test2', () => {
    const input = [7, 6, 4, 3, 1];
    const res = 0;
    expect(maxProfit(input)).toEqual(res);
  });
});
