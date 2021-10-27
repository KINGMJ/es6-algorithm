import { merge } from './index'

describe('合并区间', () => {
  test('case1', () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]
    expect(merge(intervals)).toStrictEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ])
  })

  test('case2', () => {
    const intervals = [
      [1, 4],
      [4, 5],
    ]
    expect(merge(intervals)).toStrictEqual([[1, 5]])
  })

  test('特殊一点的情况，第一个的left比第二个大', () => {
    const intervals = [
      [2, 3],
      [1, 6],
    ]
    expect(merge(intervals)).toStrictEqual([[1, 6]])
  })
})
