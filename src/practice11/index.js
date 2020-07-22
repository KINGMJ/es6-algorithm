export default class SqDoubleStack {
  constructor() {
    this.data = []      //栈的内容
    this.top1           //栈1栈顶指针
    this.top2           //栈2栈顶指针
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
    this.top1 = -1
    this.top2 = maxsize
    let i = 0
    for (i; i < maxsize; i++) {
      this.data.push(null)
    }
    return this
  }

  /**
   * 进栈操作
   * @param {*} elem 
   * @param {*} stackNumber 栈1还是栈2
   */
  push(elem, stackNumber) {
    //两个指针相遇，栈满
    if (this.top1 + 1 == this.top2) {
      return false
    }
    //栈1进栈操作
    if (stackNumber == 1) {
      this.data[++this.top1] = elem

    } else if (stackNumber == 2) {
      this.data[--this.top2] = elem
    }
    return this
  }

  /**
   * 出栈操作
   * @param {*} stackNumber 栈1还是栈2
   */
  pop(stackNumber) {
    if (stackNumber == 1) {
      //栈1空栈
      if (this.top1 == -1) {
        return false
      }
      this.data[this.top1--] = null
    } else if (stackNumber == 2) {
      //栈2空栈
      if (this.top2 == this.MAX_SIZE) {
        return false
      }
      this.data[this.top2++] = null
    }
    return this
  }
}

