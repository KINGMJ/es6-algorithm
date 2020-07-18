//声明一个单链表结点
class Node {
  constructor(data) {
    this.data = data   //数据域
    this.next = null   //指针域
  }
}


export default class CircleLinkList {
  constructor() {
    this.rear = new Node(null)  //尾指针，空链表指向头结点
    this.rear.next = this.rear  //带头结点的空链表，next指向自己
    this.length = 0             //链表长度
  }

  /**
   * 循环链表追加元素
   * @param {} data 
   */
  append(data) {
    const p = new Node(data)
    //找到头结点
    const head = this.rear.next
    let current = head
    //循环链表的循环判断条件，current.next 不等于头结点，则循环未结束
    while (current.next !== head) {
      current = current.next
    }
    current.next = p
    p.next = head
    this.rear = p
    this.length++
    return this
  }
}

export function merge(listA, listB) {
  //保存A表的头结点
  const p = listA.rear.next
  //将本是指向B表的第一个节点（不是头结点）赋值给 listA.rear.next
  listA.rear.next = listB.rear.next.next
  //将原A表的头结点赋值给listB.rear.next
  listB.rear.next = p
  //合并后rear为B的rear
  listA.rear = listB.rear
  return listA
}