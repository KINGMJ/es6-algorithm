import reverseList from './index1'
import { array2List } from '../structure/linkedList'

describe('反转链表测试', () => {
  test('测试', () => {
    const linkedList = array2List([1, 2, 3, 4, 5])
    expect(reverseList(linkedList)).toStrictEqual(array2List([5, 4, 3, 2, 1]))
  })
})