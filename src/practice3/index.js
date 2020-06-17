//声明一个单链表结点
class Node {
  constructor(data) {
    this.data = data   //数据域
    this.next = null   //指针域
  }
}

export default class LinkedList {
  constructor() {
    this.head = new Node(null)  //头结点
    this.length = 0             //单链表的长度
  }

  /**
   * 单链表追加
   * @param {*} data 
   */
  append(data) {
    //声明一节点p
    const p = new Node(data)
    let current = this.head
    //如果链表为空，append第一个节点
    if (current.next == null) {
      current.next = p
    } else {
      //不为空，一直找到最后一个节点
      while (current.next) {
        current = current.next
      }
      current.next = p
    }
    this.length++
  }

  /**
   * 单链表读取
   * @param {*} index 
   */
  getElem(index) {
    let i = 1, p = this.head.next
    while (p && i < index) {
      p = p.next
      ++i
    }
    //越界
    if (!p || i > index) {
      return false
    }
    return p.data
  }

  /**
   * 单链表节点转数组
   * @param {*} node 
   */
  list2Array(node) {
    if (!node) {
      return []
    }
    const result = [node.data]
    const restResult = this.list2Array(node.next)
    return result.concat(restResult)
  }

  /**
   * 数组转单链表
   * @param {*} arr 
   */
  array2List(arr) {
    if (arr.length === 0) {
      return this
    }
    let i = 0, curr = this.head
    for (i; i < arr.length; i++) {
      curr.next = new Node(arr[i])
      curr = curr.next
      this.length++
    }
    return this
  }

  /**
   * 单链表整表转数组
   */
  toArray() {
    return this.list2Array(this.head.next)
  }

  // insert(index, elem) { }
}




