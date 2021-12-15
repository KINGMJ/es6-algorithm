export function setZeroes(matrix) {
  const m = matrix.length,
    n = matrix[0].length
  // 使用两个标记数组分别存放row和col是否有零出现
  const arrRow = new Array(m).fill(false)
  const arrCol = new Array(n).fill(false)
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] == 0) {
        arrRow[row] = arrCol[col] = true
      }
    }
  }

  // 再次遍历数组，用标记数组来更新原数组即可
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (arrRow[row] || arrCol[col]) {
        matrix[row][col] = 0
      }
    }
  }
}
