import { lengthOfLongestSubstring } from "./index";

describe(" lengthOfLongestSubstring", () => {
  test("case1", () => {
    const s = "abcabcbb";
    const answer = 3;
    expect(lengthOfLongestSubstring(s)).toEqual(answer);
  });

  test("case2", () => {
    const s = "bbbbb";
    const answer = 1;
    expect(lengthOfLongestSubstring(s)).toEqual(answer);
  });

  test("case3", () => {
    const s = "pwwkew";
    const answer = 3;
    expect(lengthOfLongestSubstring(s)).toEqual(answer);
  });

  test("case4", () => {
    const s = "dvdf";
    const answer = 3;
    expect(lengthOfLongestSubstring(s)).toEqual(answer);
  });
});
