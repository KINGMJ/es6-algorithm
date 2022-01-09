import StaticLinkedList from '.'

describe('静态链表初始化测试', () => {
  test('申请的空间不足', () => {
    expect(() => {
      new StaticLinkedList(0)
    }).toThrow('申请的空间至少是3或以上')
  })

  test('申请的空间足够', () => {
    const list = new StaticLinkedList(3)
    //第一个元素的cur存放备用链表第一个节点的下标
    expect(list.space[0].cur).toStrictEqual(1)
    //最后一个元素的cur存放第一个插入元素的下标，相当于头结点
    expect(list.space[2].cur).toStrictEqual(0)
    //空链表长度为0
    expect(list.length).toStrictEqual(0)
  })
})

describe('静态链表整表创建，尾插法', () => {
  test('创建的链表超过了最大限制', () => {
    const list = new StaticLinkedList(6)
    const isSucceed = list.create(6)
    expect(isSucceed).toStrictEqual(false)
  })

  test('创建的链表刚好满了', () => {
    const list = new StaticLinkedList(6)
    const isSucceed = list.create(4)
    expect(isSucceed).toStrictEqual(true)
    //链表满了，第一个元素的cur为0
    expect(list.space[0].cur).toStrictEqual(0)
    //表尾的cur为0
    expect(list.space[list.length].cur).toStrictEqual(0)
    //头结点的cur为第一个元素的索引
    expect(list.space[list.MAX_SIZE - 1].cur).toStrictEqual(1)
    //链表的长度为4
    expect(list.length).toStrictEqual(4)
  })
})

describe('链表清空操作', () => {
  test('空链表清空', () => {
    const list = new StaticLinkedList(12)
    list.clear()
    expect(list.space[0].cur).toStrictEqual(1)
    expect(list.space[list.MAX_SIZE - 1].cur).toStrictEqual(0)
    expect(list.length).toStrictEqual(0)
  })

  test('非空链表清空', () => {
    const list = new StaticLinkedList(12)
    list.create(12)
    list.clear()
    expect(list.space[0].cur).toStrictEqual(1)
    expect(list.space[list.MAX_SIZE - 1].cur).toStrictEqual(0)
    expect(list.length).toStrictEqual(0)
  })
})

describe('静态链表插入测试', () => {
  let list
  beforeEach(() => {
    list = new StaticLinkedList(6)
    list.create(3)
  })
  test('插入到表头，刚好表满', () => {
    list.insert(1, '插入的元素')
    expect(list.space[0].cur).toStrictEqual(0)
    //新插入的元素cur应该指向之前的第一个元素，即1
    expect(list.space[4].cur).toStrictEqual(1)
    expect(list.space[4].data).toStrictEqual('插入的元素')
    expect(list.length).toStrictEqual(4)
  })

  test('插入到表尾', () => {
    list.insert(4, '插入的元素')
    //插入到表尾，它的cur应该为0
    expect(list.space[4].cur).toStrictEqual(0)
    expect(list.space[4].data).toStrictEqual('插入的元素')
    expect(list.length).toStrictEqual(4)
  })
  test('插入到第3个元素之前', () => {
    list.insert(3, '插入的元素')
    expect(list.space[4].cur).toStrictEqual(3)
    expect(list.space[4].data).toStrictEqual('插入的元素')
    expect(list.length).toStrictEqual(4)
  })
})

describe('静态链表删除测试', () => {
  test('删除第一个元素', () => {
    const list = new StaticLinkedList(20)
    list.create(6)
    list.insert(3, '插入的元素')
    list.delete(1)
    //长度为6
    expect(list.length).toStrictEqual(6)
    //头结点保存的cur为2
    expect(list.space[list.MAX_SIZE - 1].cur).toStrictEqual(2)
    //下标为0的元素保存的cur为1
    expect(list.space[0].cur).toStrictEqual(1)
    //下标为1的元素保存的cur为8，即删除前备用链表的第一个元素的位置
    expect(list.space[1].cur).toStrictEqual(8)
  })
})

describe('静态链表的长度获取，使用链表遍历的方式', () => {
  test('链表长度', () => {
    const list = new StaticLinkedList(30)
    list.create(20)
    expect(list.getLength()).toStrictEqual(20)
  })
})
