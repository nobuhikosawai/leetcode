// 216. Combination Sum III
// https://leetcode.com/problems/combination-sum-iii
export function combinationSum3(k: number, n: number): number[][] {
  const MAX = 9;

  function backtrack(
    target: number,
    results: number[][],
    combination: number[],
    nextStart: number
  ) {
    if (target === 0 && combination.length === k) {
      results.push([...combination]);
      return;
    }

    if (target < 0 || combination.length === k) {
      return;
    }

    for (let i = nextStart; i <= MAX; i++) {
      combination.push(i);
      backtrack(target - i, results, combination, i + 1);
      combination.pop();
    }
  }

  let res: number[][] = [];
  backtrack(n, res, [], 1);

  return res;
}
