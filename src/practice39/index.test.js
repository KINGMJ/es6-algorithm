import { productExceptSelf } from './index1'

describe('有效的括号', () => {
  test('[1,2,3,4]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6])
  })

  test('[-1,1,0,-3,3]', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toStrictEqual([0, 0, 9, 0, 0])
  })
})
