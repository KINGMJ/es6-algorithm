import LinkedList from './index'

describe('测试数组跟链表互相转换', () => {
  test('空数组转链表', () => {
    const linkedList = new LinkedList()
    expect(linkedList.array2List([])).toStrictEqual(linkedList);
  })

  test('非空数组转链表', () => {
    const linkedList = new LinkedList()
    const arr = [1, 2, 3, 4];
    const newLinkedList = linkedList.array2List(arr);
    expect(newLinkedList.toArray()).toStrictEqual(arr);
  })

  test('空链表转数组', () => {
    const linkedList = new LinkedList()
    expect(linkedList.toArray()).toStrictEqual([]);
  })
})

describe('测试单链表追加元素', () => {
  test('追加元素', () => {
    const linkedList = new LinkedList()
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.toArray()).toStrictEqual([1, 2]);
  })
})

describe('测试单链表读取元素', () => {
  test('读取元素', () => {
    let linkedList = new LinkedList()
    linkedList = linkedList.array2List([1, 2, 3, 4]);
    expect(linkedList.getElem(3)).toStrictEqual(3);
  })
})