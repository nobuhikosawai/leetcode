import { productExceptSelf } from './index';

describe('productExceptSelf', () => {
  test('ok', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
  });
});