import { isHappy } from './index';

describe('isHappy', () => {
  describe('normal', () => {
    test('happy', () => {
      expect(isHappy(19)).toEqual(true);
    });

    test('happy', () => {
      expect(isHappy(7)).toEqual(true);
    });

    test('happy', () => {
      expect(isHappy(1111111)).toEqual(true);
    });

    test('unhappy', () => {
      expect(isHappy(35)).toEqual(false);
    });
  });
});
