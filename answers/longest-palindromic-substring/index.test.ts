import { longestPalindrome } from './index';

describe('longestPalindrome', () => {
  test('test1', () => {
    const s = 'babad';
    // const output = 'bab';
    const output = 'aba';
    expect(longestPalindrome(s)).toEqual(output);
  });
  test('test2', () => {
    const s = 'cbbd';
    const output = 'bb';
    expect(longestPalindrome(s)).toEqual(output);
  });
  test('test3', () => {
    const s = 'cbbce';
    const output = 'cbbc';
    expect(longestPalindrome(s)).toEqual(output);
  });
  test('test4', () => {
    const s = 'xycddcabaefg';
    const output = 'cddc';
    expect(longestPalindrome(s)).toEqual(output);
  });
  test('test5', () => {
    const s = 'xyabbccbbaz';
    const output = 'abbccbba';
    expect(longestPalindrome(s)).toEqual(output);
  });
  test('test6', () => {
    const s = 'a';
    const output = 'a';
    expect(longestPalindrome(s)).toEqual(output);
  });
  test('test7', () => {
    const s = 'bb';
    const output = 'bb';
    expect(longestPalindrome(s)).toEqual(output);
  });
  test('test8', () => {
    const s = 'ccc';
    const output = 'ccc';
    expect(longestPalindrome(s)).toEqual(output);
  });
});
