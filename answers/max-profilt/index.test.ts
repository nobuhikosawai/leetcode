import { maxProfit } from './index';

describe('maxProfit', () => {
  describe('normal', () => {
    test('ok', () => {
      expect(maxProfit([7,1,5,3,6,4])).toEqual(7);
    });

    test('ok', () => {
      expect(maxProfit([1,2,3,4,5])).toEqual(4);
    });


    test('ok', () => {
      expect(maxProfit([7,6,4,3,1])).toEqual(0);
    });

    test('ok', () => {
      expect(maxProfit([2,1,2,0,1])).toEqual(2);
    });
  });
});
