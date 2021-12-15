import { setZeroes } from './index'
describe('矩阵置零', () => {
  test('case1', () => {
    const matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ]
    setZeroes(matrix)
    expect(matrix).toStrictEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ])
  })

  test('case2', () => {
    const matrix = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ]
    setZeroes(matrix)
    expect(matrix).toStrictEqual([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ])
  })
})
