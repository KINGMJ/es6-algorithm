import binarySearch from './index'
describe('二分查找测试', () => {
  test('查找的元素不在数组中', () => {
    const position = binarySearch([1, 3, 5, 7, 9], 4)
    expect(position).toStrictEqual(-1)
  })

  test('正常情况', () => {
    const position = binarySearch([1, 3, 5, 7, 9], 3)
    expect(position).toStrictEqual(1)
  })
})