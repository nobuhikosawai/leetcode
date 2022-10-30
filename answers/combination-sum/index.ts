// 39. Combination Sum
// https://leetcode.com/problems/combination-sum
export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const tmpRes = new Map<number, number[][]>();

  function helper(candidates: number[], target: number): void {
    candidates.forEach((c, i) => {
      const next = target - c;

      if (next < 0) {
        return;
      }

      if (next === 0) {
        tmpRes.has(target)
          ? tmpRes.get(target).push([c])
          : tmpRes.set(target, [[c]]);
        return;
      }

      helper(candidates, next);

      if (tmpRes.has(next)) {
        const res = tmpRes.get(next);

        const newRes = res.map((r) => {
          r.push(c);
          return r;
        });

        console.log('res', res);
        console.log('newres', newRes);

        if (tmpRes.has(target)) {
          const tRes = tmpRes.get(target);

          tRes.push(...newRes);
        } else {
          tmpRes.set(target, newRes);
        }
      }
    });
  }

  helper(candidates, target);

  // TODO: consider unique
  const res: number[][] = [];
  for (const v of tmpRes.values()) {
    res.push(...v);
  }
  return res;
}
