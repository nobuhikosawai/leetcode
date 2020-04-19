import { minPathSum } from './index';

describe('minPathSum', () => {
  test('ok', () => {
    expect(minPathSum([
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ])).toEqual(7);
  });

  test('ok', () => {
    expect(minPathSum([
      [1,0,1,1],
      [1,0,0,1],
      [1,1,0,1]
    ])).toEqual(2);
  });
});
