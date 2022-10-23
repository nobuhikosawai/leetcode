import { climbStairs } from '.';

describe('climbing-stairs', () => {
  it('test1', () => {
    const input = 2;
    const res = 2;
    expect(climbStairs(input)).toEqual(res);
  });

  it('test2', () => {
    const input = 3;
    const res = 3;
    expect(climbStairs(input)).toEqual(res);
  });
});
