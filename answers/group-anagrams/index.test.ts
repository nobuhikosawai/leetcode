import { groupAnagrams } from './index';

describe('groupAnagrams', () => {
  describe('normal', () => {
    test('ok', () => {
      expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual(
        [
          expect.arrayContaining(["ate","eat","tea"]),
          expect.arrayContaining(["nat","tan"]),
          ["bat"]
        ]
      );
    });
  });
});
