import { longestCommonSubsequence } from './index';

describe('longestCommonSubsequence', () => {
  test('ok', () => {
    expect(longestCommonSubsequence('ab', 'ac')).toEqual(1);
  });

  test('ok', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toEqual(3);
  });

  test('ok', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toEqual(3);
  });

  test('ok', () => {
    expect(longestCommonSubsequence('abc', 'def')).toEqual(0);
  });
});
