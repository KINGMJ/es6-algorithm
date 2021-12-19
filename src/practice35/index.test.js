import { findDiagonalOrder } from './index'
describe('矩阵置零', () => {
  test('case1', () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    expect(findDiagonalOrder(mat)).toStrictEqual([1, 2, 4, 7, 5, 3, 6, 8, 9])
  })

  test('case2', () => {
    const mat = [
      [1, 2],
      [3, 4],
    ]
    expect(findDiagonalOrder(mat)).toStrictEqual([1, 2, 3, 4])
  })
})
