export const longestCommonSubsequence = (text1: string, text2: string): number => {
  let memo: {[key: string]: number} = {};
  const dp = (i:number, j:number): number => {
    const memoKey = [i, j].toString();
    if (memo[memoKey] !== undefined) {
      return memo[memoKey];
    }

    if (i === 0 || j === 0) {
      memo[memoKey] = 0;
    } else if (i === 1 && j === 1) {
      const firstText = text1.slice(0, i);
      const secondText = text2.slice(0, j);

      memo[memoKey] = firstText === secondText ? 1 : 0;
    } else {
      const lastChar1 = text1.slice(i - 1, i);
      const lastChar2 = text2.slice(j - 1, j);

      if (lastChar1 && lastChar2 && lastChar1 === lastChar2) {
        memo[memoKey] = dp(i - 1, j - 1) + 1
      } else {
        memo[memoKey] = Math.max(dp(i, j - 1), dp(i - 1, j));
      }
    }

    return memo[memoKey];
  }

  return dp(text1.length, text2.length);
};
