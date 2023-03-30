import { uniquePaths } from '.';

describe('uniquePaths', () => {
  it('example 1', () => {
    expect(uniquePaths(3, 7)).toEqual(28);
  });
  it('example 2', () => {
    expect(uniquePaths(3, 2)).toEqual(3);
  });
});
