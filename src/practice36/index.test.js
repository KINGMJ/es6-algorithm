import { maxProfit } from './index'

describe('找到数组的中间位置', () => {
  test('[7,1,5,3,6,4]', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toStrictEqual(5)
  })

  test('[7,6,4,3,1]', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toStrictEqual(0)
  })

  test('[2,4,1]', () => {
    expect(maxProfit([2, 4, 1])).toStrictEqual(2)
  })
})
