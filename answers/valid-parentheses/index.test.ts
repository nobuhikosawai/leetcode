import { isValid } from '.';

describe('valid-parentheses', () => {
  it('test1', () => {
    const s = '()';
    const res = true;

    expect(isValid(s)).toEqual(res);
  });

  it('test2', () => {
    const s = '()[]{}';
    const res = true;

    expect(isValid(s)).toEqual(res);
  });

  it('test3', () => {
    const s = '(]';
    const res = false;

    expect(isValid(s)).toEqual(res);
  });

  it('test4', () => {
    const s = '[';
    const res = false;

    expect(isValid(s)).toEqual(res);
  });
});
