import { findContentChildren } from './index'

describe('分发饼干', () => {
  test('g = [1,2,3], s = [1,1]', () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toStrictEqual(1)
  })

  test('g = [1,2], s = [1,2,3]', () => {
    expect(findContentChildren([1, 2], [1, 2, 3])).toStrictEqual(2)
  })

  test('g = [10,9,8,7], s=[5,6,7,8]', () => {
    expect(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])).toStrictEqual(2)
  })
})
