import { searchInsert } from './index'
describe('搜索插入位置', () => {
  test('case1', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toStrictEqual(2)
  })

  test('case2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toStrictEqual(1)
  })

  test('case3', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toStrictEqual(4)
  })

  test('case4', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toStrictEqual(0)
  })

  test('case5', () => {
    expect(searchInsert([1], 0)).toStrictEqual(0)
  })
})
