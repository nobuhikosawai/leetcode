export function uniquePaths(m: number, n: number): number {
  const ans = Array.from({ length: m }, () => Array(n).fill(1));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] = i === 0 || j === 0 ? 1 : ans[i - 1][j] + ans[i][j - 1];
    }
  }

  return ans[m - 1][n - 1];
}
