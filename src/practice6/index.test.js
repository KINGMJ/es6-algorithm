import { hasCycle } from './index1'
import { cycleList } from '../structure/linkedList'

describe('环形链表测试', () => {
  test('链表只有一个节点，没有环', () => {
    const head = [1], pos = -1
    const linkedList = cycleList(head, pos)

    console.log(linkedList);
    expect(hasCycle(linkedList)).toStrictEqual(false)
  })

  test('链表中有一个环，其尾部连接到第一个节点', () => {
    const head = [1, 2], pos = 0
    const linkedList = cycleList(head, pos)
    expect(hasCycle(linkedList)).toStrictEqual(true)
  })


  test('链表中有一个环，其尾部连接到第二个节点', () => {
    const head = [3, 2, 0, -4], pos = 1
    const linkedList = cycleList(head, pos)
    expect(hasCycle(linkedList)).toStrictEqual(true)
  })
})
