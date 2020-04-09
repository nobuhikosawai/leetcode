import { backspaceCompare } from './index';

describe('backspaceCompare', () => {
  test('ok', () => {
    expect(backspaceCompare("ab#c", "ad#c")).toEqual(true);
  });

  test('ok', () => {
    expect(backspaceCompare("ab##", "c#d#")).toEqual(true);
  });

  test('ok', () => {
    expect(backspaceCompare("a##c", "#a#c")).toEqual(true);
  });

  test('ok', () => {
    expect(backspaceCompare("a#c", "b")).toEqual(false);
  });

  test('ok', () => {
    expect(backspaceCompare("hd#dp#czsp#####", "hd#dp#czsp######")).toEqual(false);
  });
});
