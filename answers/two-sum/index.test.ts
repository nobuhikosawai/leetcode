import { twoSum } from './index';

describe('twoSum', () => {
  describe('normal', () => {
    test('returns correct value', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('returns correct value', () => {
      expect(twoSum([2, 7, 11, 15], 26)).toEqual([2, 3]);
    });

    test('returns correct value', () => {
      expect(twoSum([2, 7, 11, 15], 22)).toEqual([1, 3]);
    });
  });

  describe('when [incorrect target is given', () => {
    test('returns undefined', () => {
      expect(twoSum([2, 7, 11, 15], 3)).toEqual(undefined);
    });
  })
});
