//声明一个单链表结点
class Node {
  constructor(data) {
    this.data = data   //数据域
    this.next = null   //指针域
  }
}


class CircleLinkList {
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



const circleLinkList = new CircleLinkList()

circleLinkList.append(1)
circleLinkList.append(2)
console.log(circleLinkList)