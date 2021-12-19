export function findDiagonalOrder(mat) {
  const row = mat.length,
    col = mat[0].length,
    res = []

  for (let i = 0; i < col; i++) {
    let xPos = 0,
      yPos = i,
      arr = []
    while (yPos >= 0 && xPos < row) {
      arr.push(mat[xPos][yPos])
      xPos++
      yPos--
    }
    if (!(i & 1)) {
      arr.reverse()
    }
    res.push(...arr)
  }

  for (let j = 1; j < row; j++) {
    let xPos = j,
      yPos = col - 1,
      arr = []
    while (yPos >= 0 && xPos < row) {
      arr.push(mat[xPos][yPos])
      xPos++
      yPos--
    }
    //分两种情况，col为奇数时，j为偶数需要翻转；col为偶数时，j为奇数要翻转
    const needReverse = (col & 1 && !(j & 1)) || (!(col & 1) && j & 1)
    if (needReverse) {
      arr.reverse()
    }
    res.push(...arr)
  }
  return res
}
