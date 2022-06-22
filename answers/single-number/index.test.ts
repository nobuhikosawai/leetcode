import { singleNumber } from './index';

describe('singleNumber', () => {
  describe('normal', () => {
    test('ok', () => {
      expect(singleNumber([2, 2, 1])).toEqual(1);
    });

    test('ok', () => {
      expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
    });
  });
});
