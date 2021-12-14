export function rotate(matrix) {
  const n = matrix.length
  //水平翻转
  for (let row = 0; row < Math.floor(n / 2); row++) {
    for (let col = 0; col < n; col++) {
      ;[matrix[row][col], matrix[n - row - 1][col]] = [matrix[n - row - 1][col], matrix[row][col]]
    }
  }

	// 对角线翻转
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < row; col++) {
      ;[matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
    }
  }
}
