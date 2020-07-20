//声明一个双向链表节点
class Node {
  constructor(data) {
    this.data = data   //数据域
    this.next = null   //后继指针
    this.prev = null   //前驱指针
  }
}

export default class DulLinkList {
  constructor() {
    this.head = new Node(null)
    this.length = 0
  }

  append(data) {
    const p = new Node(data)
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = p
    p.prev = current
    this.length++;
    return this
  }

  /**
   * 双向链表插入操作
   * @param {*} index 
   * @param {*} elem 
   */
  insert(index, elem) {
    let i = 1, p = this.head
    const s = new Node(elem)
    while (p && i < index) {
      p = p.next
      ++i
    }
    if (!p || i > index) {
      return false
    }

    //设置s的前驱和后置
    s.prev = p
    s.next = p.next
    //设置p.next的前驱
    p.next.prev = s
    //设置p的后置
    p.next = s
    this.length++
    return this
  }

  /**
   * 双向链表删除操作
   * @param {*} index 
   */
  delete(index) {
    if (index <= 0) {
      return false;
    }
    let i = 1, p = this.head
    while (p.next && i <= index) {
      p = p.next
      ++i
    }
    if (!p.next || index > i) {
      return false
    }
    p.prev.next = p.next
    p.next.prev = p.prev
    this.length--
    return this
  }
}

