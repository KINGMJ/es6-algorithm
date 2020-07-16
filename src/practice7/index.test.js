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

    console.log(staticLinkList)
  })
})


describe('静态链表整表创建，尾插法', () => {
  test('创建10个元素的链表', () => {
    let staticLinkList = new StaticLinkList().init(20)
    staticLinkList = staticLinkList.createListTail(10)
    //第一个元素的cur应该为11
    expect(staticLinkList.space[0].cur).toStrictEqual(11)
    expect(staticLinkList.length).toStrictEqual(10)
    //第11个元素的cur应该0
    expect(staticLinkList.space[10].cur).toStrictEqual(0)
    console.log(staticLinkList)
  })
})


describe('静态链表插入测试', () => {
  test('插入到第3个元素之前', () => {
    let staticLinkList = new StaticLinkList().init(20)
    staticLinkList = staticLinkList.createListTail(6)
    staticLinkList = staticLinkList.insert(3, "插入的元素")

    console.log(staticLinkList)
    //第一个元素的cur应该为8
    expect(staticLinkList.space[0].cur).toStrictEqual(8)
    //长度为7
    expect(staticLinkList.length).toStrictEqual(7)
    //下标为7的元素，即新插入的元素的cur应该为第3个元素之前的一个元素的cur值
    expect(staticLinkList.space[7].cur).toStrictEqual(3)
    //下标为2的元素，即第3个元素之前的一个元素的cur值应该为新插入的元素的下标
    expect(staticLinkList.space[2].cur).toStrictEqual(7)
  })
})

describe('静态链表删除测试', () => {
  test('删除第一个元素', () => {
    let staticLinkList = new StaticLinkList().init(20)
    staticLinkList = staticLinkList.createListTail(6)
    staticLinkList = staticLinkList.insert(3, "插入的元素")
    console.log(staticLinkList)
    staticLinkList = staticLinkList.listDelete(1)
    console.log(staticLinkList)

    //长度为6
    expect(staticLinkList.length).toStrictEqual(6)
    //头结点保存的cur为2
    expect(staticLinkList.space[19].cur).toStrictEqual(2)
    //下标为0的元素保存的cur为1
    expect(staticLinkList.space[0].cur).toStrictEqual(1)
    //下标为1的元素保存的cur为8，即删除前备用链表的第一个元素的位置
    expect(staticLinkList.space[1].cur).toStrictEqual(8)
    
  })
})