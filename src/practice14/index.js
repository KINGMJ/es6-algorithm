class QNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}


export default class LinkQueue {
  constructor() {
    //空队列时，front 和 rear 都指向头结点
    this.front = new QNode(null)
    this.rear = this.front
  }

  /**
   * 进队列，其实就是在链表尾部插入结点
   * @param {*} elem 
   */
  enQueue(elem) {
    const p = new QNode(elem)
    this.rear.next = p
    this.rear = p
    return this
  }

  /**
   * 出队列，头结点的后继结点出队，将头结点的后继改为它后面的节点；
   * 若链表除头结点外只剩一个元素时，则需将 rear 指向头结点
   */
  deQueue() {
    //判断队列是否为空
    if (this.front == this.rear) {
      return false
    }
    //将欲删除的队头节点暂存给p
    const p = this.front.next
    //将原队头节点的后继 p->next 赋值给头结点后继
    this.front.next = p.next
    //若队列只剩下一个节点，即 this.rear 刚好指向被删除的结点
    if (this.rear == p) {
      this.rear = this.front
    }
    return this
  }
}