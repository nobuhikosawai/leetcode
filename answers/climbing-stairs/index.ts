// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
export function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }
  let first = 1;
  let second = 2;

  for (let i = 2; i < n; i++) {
    const res = first + second;
    first = second;
    second = res;
  }

  return second;
}
