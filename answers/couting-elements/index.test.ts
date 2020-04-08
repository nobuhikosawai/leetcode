import { countElemenets } from './index';

describe('countingElemenets', () => {
  test('ok', () => {
    expect(countElemenets([1,2,3])).toEqual(2);
  });

  test('ok', () => {
    expect(countElemenets([1,1,3,3,5,5,7,7])).toEqual(0);
  });

  test('ok', () => {
    expect(countElemenets([1,3,2,3,5,0])).toEqual(3);
  });

  test('ok', () => {
    expect(countElemenets([1,1,2,2])).toEqual(2);
  });
});
