export const minPathSum = (grid: number[][]): number => {
  const numRow = grid.length;
  const numColumn = grid[0].length; // 2d square

  let minSum: number | null = null;

  const dfs = (sum: number, i: number, j: number) => {
    const val = grid[i] && grid[i][j];
    if (val === undefined) { return sum; }

    sum += val;
    
    if (i === numRow - 1 && j === numColumn - 1) {
      if (minSum !== null && minSum > sum) {
        minSum = sum;
      } else if (minSum == null) {
        minSum = sum
      }
    }

    dfs(sum, i + 1, j);
    dfs(sum, i, j + 1);
  };

  dfs(0, 0, 0);

  return minSum;
};
