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
}