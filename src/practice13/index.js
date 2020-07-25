export default class SqQueue {
  constructor() {
    this.data = []
    this.front;       //头指针
    this.rear;        //尾指针，若队列不为空，指向队列尾元素的下一个位置
    this.MAX_SIZE;
  }

  /**
   * 初始化一个循环链表
   * @param {*} maxsize 
   */
  init(maxsize) {
    this.front = 0
    this.rear = 0
    this.MAX_SIZE = maxsize
    if (maxsize < 1) {
      return this
    }
    let i = 0
    for (i; i < maxsize; i++) {
      this.data.push(null)
    }
    return this
  }

  /**
   * 返回队列长度，使用队列长度通用公式
   */
  getLength() {
    return (this.rear - this.front + this.MAX_SIZE) % this.MAX_SIZE
  }

  /**
   * 进队列
   * @param {*} elem 
   */
  enQueue(elem) {
    //判断队列是否已满
    if ((this.rear + 1) % this.MAX_SIZE == this.front) {
      return false
    }
    //将elem赋值给队尾
    this.data[this.rear] = elem
    //队尾指针后移一位，若到最后则转到数组头部
    this.rear = (this.rear + 1) % this.MAX_SIZE
    return this
  }

  /**
   * 出队列
   */
  deQueue() {
    //判断队列是否为空
    if (this.front == this.rear) {
      return false
    }
    this.data[this.front] = null
    //front指针向后移动一位，若到最后则转到数组头部
    this.front = (this.front + 1) % this.MAX_SIZE
    return this
  }
}