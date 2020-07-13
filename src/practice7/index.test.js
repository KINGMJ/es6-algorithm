import { StaticLinkList } from './index'

describe('静态链表初始化测试', () => {
  test('空链表', () => {
    const staticLinkList = new StaticLinkList().init(0)
    expect(staticLinkList.space).toStrictEqual([])
  })

  test('非空链表', () => {
    const staticLinkList = new StaticLinkList().init(10)
    //第一个元素的cur存放备用链表第一个节点的下标
    expect(staticLinkList.space[0].cur).toStrictEqual(1)
    //最后一个元素的cur存放第一个插入元素的下标，相当于头结点
    expect(staticLinkList.space[9].cur).toStrictEqual(0)
  })
})
