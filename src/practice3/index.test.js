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
