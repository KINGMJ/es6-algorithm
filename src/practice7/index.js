export class StaticLinkList {
  constructor() {
    this.space = [] //静态链表使用一维数组space来表示
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


}