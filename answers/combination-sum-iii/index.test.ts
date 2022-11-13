import { combinationSum3 } from '.';

describe('combination-sum-iii', () => {
  it('test1', () => {
    const k = 3,
      n = 7;
    const output = [[1, 2, 4]];
    expect(combinationSum3(k, n)).toEqual(output);
  });

  it('test2', () => {
    const k = 3,
      n = 9;
    const output = [
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ];
    expect(combinationSum3(k, n)).toEqual(output);
  });

  it('test3', () => {
    const k = 4,
      n = 1;
    const output: number[][] = [];
    expect(combinationSum3(k, n)).toEqual(output);
  });
});
