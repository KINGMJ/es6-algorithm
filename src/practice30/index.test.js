import { findMiddleIndex } from './index'
describe('找到数组的中间位置', () => {
  test('[2,3,-1,8,4]', () => {
    expect(findMiddleIndex([2, 3, -1, 8, 4])).toStrictEqual(3)
  })

  test('[1,-1,4]', () => {
    expect(findMiddleIndex([1, -1, 4])).toStrictEqual(2)
  })

  test('[2,5]', () => {
    expect(findMiddleIndex([2, 5])).toStrictEqual(-1)
  })

  test('[1]', () => {
    expect(findMiddleIndex([1])).toStrictEqual(0)
  })
})
