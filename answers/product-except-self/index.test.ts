import { productExceptSelf } from './index';

describe('productExceptSelf', () => {
  test('ok', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
  });

  test('ok', () => {
    expect(productExceptSelf([0, 0])).toEqual([0, 0]);
  });

  test('ok', () => {
    expect(productExceptSelf([1,0])).toEqual([0,1]);
  });

  test('ok', () => {
    expect(productExceptSelf([0,1,0])).toEqual([0,0,0]);
  });
});
