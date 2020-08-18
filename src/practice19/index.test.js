import { factorial, fibonacci, gcd, reverseList } from './index'
import { array2List } from '../structure/linkedList'

describe('计算阶乘', () => {
  test('1的阶乘', () => {
    expect(factorial(1)).toStrictEqual(1)
  })
  test('2的阶乘', () => {
    expect(factorial(2)).toStrictEqual(2)
  })
  test('6的阶乘', () => {
    expect(factorial(6)).toStrictEqual(6 * 5 * 4 * 3 * 2 * 1)
  })
})

describe('斐波那契数列', () => {
  test('第一项为1', () => {
    expect(fibonacci(1)).toStrictEqual(1)
  })
  test('第二项为1', () => {
    expect(fibonacci(2)).toStrictEqual(1)
  })
  test('第三项为2', () => {
    expect(fibonacci(3)).toStrictEqual(2)
  })
  test('第九项为34', () => {
    expect(fibonacci(9)).toStrictEqual(34)
  })
})

describe('欧几里得算法，求最大公约数', () => {
  test('1680和640的最大公约数为80', () => {
    expect(gcd(1680, 640)).toStrictEqual(80)
  })
})

describe('单链表反转', () => {
  test('空链表', () => {
    expect(reverseList(null)).toStrictEqual(null)
  })

  test('链表只有一项', () => {
    const linkedList = array2List([1])
    expect(reverseList(linkedList)).toStrictEqual(linkedList)
  })

  test('链表有多项', () => {
    const linkedList = array2List([1, 2, 3, 4])
    expect(reverseList(linkedList)).toStrictEqual(array2List([4, 3, 2, 1]))
  })
})
