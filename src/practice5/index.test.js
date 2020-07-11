import { oddEvenList } from './index'
import { array2List } from '../structure/linkedList'

describe('奇偶链表测试', () => {
  test('链表为空', () => {
    const p1 = array2List([]);
    expect(oddEvenList(p1)).toStrictEqual(null);
  })

  test('链表元素个数为奇数', () => {
    const p1 = array2List([1, 2, 3, 4, 5])
    const p2 = array2List([1, 3, 5, 2, 4])
    expect(oddEvenList(p1)).toStrictEqual(p2);
  })

  test('链表元素个数为偶数', () => {
    const p1 = array2List([1, 2, 3, 4, 5, 6]);
    const p2 = array2List([1, 3, 5, 2, 4, 6])
    expect(oddEvenList(p1)).toStrictEqual(p2);
  })
})
