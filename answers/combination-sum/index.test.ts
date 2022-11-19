import { combinationSum } from '.';

describe('combination-sum', () => {
  it('test1', () => {
    const candidates = [2, 3, 6, 7],
      target = 7;
    const res = [[2, 2, 3], [7]];
    expect(combinationSum(candidates, target)).toEqual(res);
  });

  it('test2', () => {
    const candidates = [2, 3, 5],
      target = 8;
    const res = [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ];
    expect(combinationSum(candidates, target)).toEqual(res);
  });

  it('test3', () => {
    const candidates = [2],
      target = 1;
    const res: number[][] = [];
    expect(combinationSum(candidates, target)).toEqual(res);
  });

  it('test4', () => {
    const candidates = [1, 2],
      target = 2;
    const res: number[][] = [[1, 1], [2]];
    expect(combinationSum(candidates, target)).toEqual(res);
  });

  it('test5', () => {
    const candidates = [1, 2, 3],
      target = 3;
    const res: number[][] = [[1, 1, 1], [1, 2], [3]];
    expect(combinationSum(candidates, target)).toEqual(res);
  });
});
