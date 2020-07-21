export default class SqStack {
  constructor() {
    this.data = []      //栈的内容
    this.top = -1       //栈顶指针
    this.length = 0     //栈的长度
    this.MAX_SIZE = 0   //栈的最大空间
  }

  /**
   * 初始化操作，建立一个空栈
   * @param {*} maxsize 
   */
  init(maxsize) {
    if (maxsize < 1) {
      return this
    }
    this.MAX_SIZE = maxsize
    let i = 0
    for (i; i < maxsize; i++) {
      this.data.push(null)
    }
    return this
  }

  /**
   * 进栈操作
   * @param {*} elem 
   */
  push(elem) {
    //栈满
    if (this.top == this.MAX_SIZE - 1) {
      return false
    }

    this.top++
    this.data[this.top] = elem
    this.length++
  }

  pop() {
    //栈为空
    if (this.top == -1) {
      return false
    }
    this.data[this.top] = null
    this.top--
    this.length--
    return this
  }
}

