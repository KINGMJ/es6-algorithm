import { LinkedList, Node } from './index'

describe('测试单链表插入元素', () => {
  let linkedList
  beforeEach(() => {
    linkedList = new LinkedList().array2List([1, 2, 3, 4])
  })

  test('表头越界', () => {
    const isSucceed = linkedList.insert(0, 5)
    expect(isSucceed).toStrictEqual(false)
  })

  test('表尾越界', () => {
    const isSucceed = linkedList.insert(6, 5)
    expect(isSucceed).toStrictEqual(false)
  })

  test('表头插入', () => {
    const isSucceed = linkedList.insert(1, 5)
    expect(isSucceed).toStrictEqual(true)
    expect(linkedList.toArray()).toStrictEqual([5, 1, 2, 3, 4])
  })

  test('表尾插入', () => {
    const isSucceed = linkedList.insert(5, 5)
    expect(isSucceed).toStrictEqual(true)
    expect(linkedList.toArray()).toStrictEqual([1, 2, 3, 4, 5])
  })
})

describe('测试单链表删除元素', () => {
  let linkedList
  beforeEach(() => {
    linkedList = new LinkedList().array2List([1, 2, 3, 4])
  })

  test('表头越界', () => {
    const node = linkedList.delete(0)
    expect(node).toStrictEqual(false)
  })

  test('表尾越界', () => {
    const node = linkedList.delete(5)
    expect(node).toStrictEqual(false)
  })

  test('删除第一个元素', () => {
    const data = linkedList.delete(1)
    expect(data).toStrictEqual(1)
    expect(linkedList.toArray()).toStrictEqual([2, 3, 4])
  })

  test('删除中间元素', () => {
    const data = linkedList.delete(3)
    expect(data).toStrictEqual(3)
    expect(linkedList.toArray()).toStrictEqual([1, 2, 4])
  })

  test('删除最后一个元素', () => {
    const data = linkedList.delete(4)
    expect(data).toStrictEqual(4)
    expect(linkedList.toArray()).toStrictEqual([1, 2, 3])
  })
})

describe('测试单链表追加元素', () => {
  test('追加元素', () => {
    const linkedList = new LinkedList()
    linkedList.append(1)
    linkedList.append(2)
    expect(linkedList.toArray()).toStrictEqual([1, 2])
    expect(linkedList.length == 2)
  })
})

describe('测试数组跟链表互相转换', () => {
  test('空数组转链表', () => {
    const linkedList = new LinkedList()
    expect(linkedList.array2List([])).toStrictEqual(linkedList)
  })

  test('非空数组转链表', () => {
    const linkedList = new LinkedList()
    const arr = [1, 2, 3, 4]
    const newLinkedList = linkedList.array2List(arr)
    expect(newLinkedList.toArray()).toStrictEqual(arr)
  })

  test('空链表转数组', () => {
    const linkedList = new LinkedList()
    expect(linkedList.toArray()).toStrictEqual([])
  })
})

describe('测试单链表读取元素', () => {
  test('读取元素', () => {
    let linkedList = new LinkedList()
    linkedList = linkedList.array2List([1, 2, 3, 4])
    expect(linkedList.getElem(3)).toStrictEqual(3)
  })
})

describe('测试单链表整表创建--->头插法', () => {
  test('创建随机链表', () => {
    const linkedList = new LinkedList()
    linkedList.createListTail(5)
    const testArray = linkedList.toArray()
    console.log(testArray)
    expect(Array.isArray(testArray)).toStrictEqual(true)
    expect(testArray.length).toStrictEqual(5)
  })
})

describe('测试单链表整表创建--->尾插法', () => {
  test('创建随机链表', () => {
    const linkedList = new LinkedList()
    linkedList.createListTail(5)
    const testArray = linkedList.toArray()
    console.log(testArray)
    expect(Array.isArray(testArray)).toStrictEqual(true)
    expect(testArray.length).toStrictEqual(5)
  })
})

describe('测试单链表整表删除', () => {
  test('整表删除', () => {
    let linkedList = new LinkedList()
    linkedList.createListTail(5)
    linkedList.clear()
    console.log(linkedList)
    expect(linkedList.toArray()).toStrictEqual([])
    expect(linkedList.length).toStrictEqual(0)
  })
})
