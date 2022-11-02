// 216. Combination Sum III
// https://leetcode.com/problems/combination-sum-iii
export function combinationSum3(k: number, n: number): number[][] {
  function helper(
    target: number,
    candidates: number[],
    count: number
  ): number[][] {
    if (count > k || target < 1) {
      return [];
    }

    return candidates.flatMap((c, i) => {
      const newTarget = target - c;

      if (newTarget === 0 && count === k) {
        return [[c]];
      }

      const newCandidates = [...candidates.slice(i + 1)];

      const res = helper(newTarget, newCandidates, count + 1);

      return res.map((r) => {
        return [c, ...r];
      });
    });
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return helper(n, numbers, 1);
}
