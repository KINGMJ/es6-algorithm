class StackNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export default class LinkStack {
  constructor() {
    this.top = null   //栈顶指针，空链栈栈顶指针为null
    this.length = 0
  }

  /**
   * 进栈操作，对于链栈来说，不会存在栈满的情况
   * @param {*} data 
   */
  push(data) {
    //生成一个新的节点，把当前栈顶元素赋值给新结点的直接后继
    const node = new StackNode(data)
    node.next = this.top
    //将新的结点赋值给栈顶指针
    this.top = node
    this.length++;
    return this
  }

  pop() {
    //判断栈是否为空
    if (this.top == null) {
      return false
    }
    //指针下移一位，指向后一结点
    this.top = this.top.next
    this.length--
    return this
  }
}

