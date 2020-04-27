export const longestCommonSubsequence = (text1: string, text2: string): number => {
  // todo: memoize
  const dp = (i:number, j:number): number => {
    if (i === 0 || j === 0) {
      return 0;
    } else if (i === 1 && j === 1) {
      const firstText = text1.slice(0, i);
      const secondText = text2.slice(0, j);

      return firstText === secondText ? 1 : 0;
    } else {
      const lastChar1 = text1.slice(i - 1, i);
      const lastChar2 = text2.slice(j - 1, j);

      if (lastChar1 && lastChar2 && lastChar1 === lastChar2) {
        return dp(i - 1, j - 1) + 1
      } else {
        return Math.max(dp(i, j - 1), dp(i - 1, j));
      }
    }
  }

  return dp(text1.length, text2.length);
};
