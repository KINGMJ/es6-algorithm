import { canCagePackRabbit } from './index'

describe('兔子被装到不同的笼子后, 需满足每个笼子的兔子重量相等', () => {
  test('case1: 笼子的数量超过兔子的数量', () => {
    expect(canCagePackRabbit([1, 2, 3], 5)).toStrictEqual(false)
  })

  test('case2: 兔子的重量不能被笼子整除', () => {
    expect(canCagePackRabbit([1, 2, 3, 5], 2)).toStrictEqual(false)
  })

  test('case3: 兔子不能被平均分配到不同的笼子中', () => {
    expect(canCagePackRabbit([1, 2, 3], 3)).toStrictEqual(false)
  })

  test('case4: 兔子可以被平均分配到不同的笼子中', () => {
    expect(canCagePackRabbit([2, 2, 3, 3, 5], 3)).toStrictEqual(true)
  })
})
