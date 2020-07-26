import removeZeroSumSublists from './index'
import { array2List } from '../structure/linkedList'

describe('从链表中删去总和值为零的连续节点测试', () => {
  test('测试1', () => {
    const head = array2List([1, 2, -3, 3, 1])
    expect(removeZeroSumSublists(head)).toStrictEqual(array2List([3, 1]))
  })

  test('测试2', () => {
    const head = array2List([1, 2, 3, -3, 4])
    expect(removeZeroSumSublists(head)).toStrictEqual(array2List([1, 2, 4]))
  })

  test('测试3', () => {
    const head = array2List([1, 2, 3, -3, -2])
    expect(removeZeroSumSublists(head)).toStrictEqual(array2List([1]))
  })

  test('测试4', () => {
    const head = array2List([1, -1, 2])
    expect(removeZeroSumSublists(head)).toStrictEqual(array2List([2]))
  })

  test('测试5', () => {
    const head = array2List([1, -1, 1, -1])
    expect(removeZeroSumSublists(head)).toStrictEqual(array2List([]))
  })
})