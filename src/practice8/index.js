//声明一个单链表结点
class Node {
  constructor(data) {
    this.data = data   //数据域
    this.next = null   //指针域
  }
}


export default class CircleLinkList {
  constructor() {
    this.head = new Node(null)  //头结点
    this.length = 0             //链表长度
  }
}