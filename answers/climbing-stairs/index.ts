// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
export function climbStairs(n: number): number {
  const results = Array(n).fill(0);
  results[0] = 1;
  results[1] = 2;
  if (n < 3) {
    return results[n - 1];
  }

  for (let i = 2; i < n; i++) {
    const res = results[i - 1] + results[i - 2];
    results[i] = res;
  }

  return results[n - 1];
}
