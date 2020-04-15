import { stringShift } from './index';

describe('stringShift', () => {
  test('ok', () => {
    expect(stringShift("abc", [[0,1],[1,2]])).toEqual("cab");
  });

  test('ok', () => {
    expect(stringShift("abcdefg", [[1,1],[1,1],[0,2],[1,3]])).toEqual("efgabcd");
  });
});
