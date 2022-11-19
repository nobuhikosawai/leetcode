// 39. Combination Sum
// https://leetcode.com/problems/combination-sum
export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  function backtrack(
    target: number,
    results: number[][],
    combination: number[],
    startIndex: number
  ) {
    if (target === 0) {
      results.push([...combination]);
      return;
    }

    if (target < 0) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      const candidate = candidates[i];
      combination.push(candidate);
      backtrack(target - candidate, results, combination, i);
      combination.pop();
    }
  }

  const results: number[][] = [];
  backtrack(target, results, [], 0);
  return results;
}
