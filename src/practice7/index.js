export class StaticLinkList {
  constructor() {
    this.space = [] //静态链表使用一维数组space来表示
    this.length = 0
    this.MAX_SIZE = 0
  }

  init(maxsize) {
    //异常判断
    if (maxsize < 1) {
      return this
    }

    let i = 0;
    //数组第一个元素的cur用来存放备用链表第一个节点的下标
    //初始化时整个数组都没有被使用过，整个链表都是备用链表，space[0].cur = 1
    for (i; i < maxsize - 1; i++) {
      this.space.push({
        cur: i + 1,
        data: null
      })
    }
    //数组最后一个元素的cur用来存放第一个插入元素的下标，相当于头结点
    this.space[maxsize - 1] = {
      cur: 0,
      data: null
    }
    this.MAX_SIZE = maxsize
    return this
  }

  /**
   * 模拟申请内存
   * 在静态链表中，每次插入数据都是从备用链表上取得第一个结点作为待插入的新结点
   */
  malloc_ssl() {
    //获取备用链表第一个结点的下标
    let i = this.space[0].cur
    //由于要拿出一个分量来使用了，所以我们就得把它的下一个分量用来做备用
    if (i) {
      this.space[0].cur = this.space[i].cur
    }
    //返回备用链表第一个结点的下标
    return i
  }

  /**
   * 静态链表整表创建，尾插法
   * @param {*} n 
   */
  createListTail(n) {
    let i = 0, j;

    for (i; i < n; i++) {
      j = this.malloc_ssl() //获得空闲分量的下标
      if (!j) {
        return false
      }

      this.space[j].data = Number.parseInt(Math.random() * 10 + 1)
      //最后一个元素须将cur设置为0
      if (j == n) {
        this.space[j].cur = 0
      }
      this.length++
    }
    //设置头结点
    this.space[this.MAX_SIZE - 1].cur = 1
    return this
  }

  /**
   * 静态链表的插入，在节点前插入
   * @param {*} index 
   * @param {*} elem 
   */
  insert(index, elem) {
    let i = 1, new_node_index, cursor;

    //最后一个元素下标，也就是找到头结点
    cursor = this.MAX_SIZE - 1

    //插入元素的范围，1到最后一个元素+1，即可以插入到表尾
    if (index < 1 || index > this.length + 1) {
      return false
    }

    //获得空闲分量的下标
    new_node_index = this.malloc_ssl()

    if (!new_node_index) {
      return false;
    }

    this.space[new_node_index].data = elem
    this.length++

    //找到第index元素的前一个元素
    for (i; i <= index - 1; i++) {
      cursor = this.space[cursor].cur
    }

    //把第index个元素的前一个元素的cur赋值给新元素的cur，即把新插入的元素指向给第index个元素
    this.space[new_node_index].cur = this.space[cursor].cur
    //把新元素的下标赋值给第index个元素的前一个元素，即把第index个元素的前一个元素指向新插入的元素
    this.space[cursor].cur = new_node_index
    return this
  }

  /**
   * 释放结点
   * @param {int} index 
   */
  free_ssl(index) {
    //把下标为0，即存放备用链表第一个元素的cur分量赋值给第index个元素
    this.space[index].cur = this.space[0].cur
    //data置为null，表示删除了
    this.space[index].data = null
    //由于第index个元素释放出来了，所以下标为0的元素的cur为index
    this.space[0].cur = index
  }

  /**
   * 静态链表删除操作
   * @param {*} index 
   */
  listDelete(index) {
    let i = 1, cursor
    //最后一个元素下标，也就是找到头结点
    cursor = this.MAX_SIZE - 1
    //插入元素的范围，1到最后一个元素
    if (index < 1 || index > this.length) {
      return false
    }
    //找到第index元素的前一个元素
    for (i; i <= index - 1; i++) {
      cursor = this.space[cursor].cur
    }
    //第index个元素的下标
    i = this.space[cursor].cur
    //前一个元素的cur指向index元素的cur，即表示 index已经删除了，前一个元素指向它后一个元素
    this.space[cursor].cur = this.space[i].cur
    this.free_ssl(index)
    this.length--
    return this
  }
}