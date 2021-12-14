export function rotate(matrix) {
  // 这里复制的时候，注意不要用 slice 等浅拷贝的方法
  const newMatrix = matrix.map(arr => [...arr])

  // 规律：newMatrix[j][matrix.length - i - 1] = matrix[i][j]，通过画图就可以推理得到
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j][matrix.length - i - 1] = matrix[i][j]
    }
  }

  // 最后通过对 matrix 迭代修改值的方式保持引用
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = newMatrix[i][j]
    }
  }
}
