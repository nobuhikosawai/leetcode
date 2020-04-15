import { stringShift } from './index';

describe('stringShift', () => {
  test('ok', () => {
    expect(stringShift("abc", [[0,1],[1,2]])).toEqual("cab");
  });

  test('ok', () => {
    expect(stringShift("abcdefg", [[1,1],[1,1],[0,2],[1,3]])).toEqual("efgabcd");
  });

  test('ok', () => {
    expect(stringShift("xqgwkiqpif", [[1,4],[0,7],[0,8],[0,7],[0,6],[1,3],[0,1],[1,7],[0,5],[0,6]])).toEqual("qpifxqgwki");
  });
});
