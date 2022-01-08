//声明一个单链表结点
export class Node {
  constructor(data) {
    this.data = data //数据域
    this.next = null //指针域
  }
}

/**
 * 链表数据结构
 */
export class LinkedList {
  constructor() {
    this.head = new Node(null) //头结点
    this.length = 0 //存放链表的长度
  }

  /**
   * 单链表的插入，在节点之前插入
   * @param {*} index 第几个节点
   * @param {*} elem  插入的数据
   * @returns
   */
  insert(index, elem) {
    let j = 1,
      p = this.head
    //找到第 index-1 个节点，因为有头节点的缘故，找到的是 index 的前一个节点
    while (p && j < index) {
      p = p.next
      ++j
    }
    //如果没找到返回false
    if (!p || j > index) {
      return false
    }
    //声明一个要插入的节点
    const s = new Node(elem)
    //插入核心逻辑
    s.next = p.next
    p.next = s
    //链表长度加1
    ++this.length
    return true
  }

  /**
   * 单链表的删除
   * @param {*} index
   * @returns
   */
  delete(index) {
    //如果链表存储了长度，可以借用该属性处理边界
    if (index < 1 || index > this.length) {
      return false
    }
    //找到 index 的前一个节点
    let j = 1,
      p = this.head
    while (p && j < index) {
      p = p.next
      ++j
    }
    //前面处理了边界情况，这个判断就不需要了
    // if(!p || j>index){
    //   return false
    // }
    //链表删除核心逻辑
    const q = p.next
    p.next = q.next
    //返回删除节点的数据并释放该节点
    const data = q.data
    //delete q
    ++this.length
    return data
  }

  /**
   * 单链表追加节点
   * @param {*} data
   */
  append(data) {
    const p = new Node(data)
    let current = this.head
    //找到最后一个节点
    while (current.next) {
      current = current.next
    }
    current.next = p
    ++this.length
  }

  /**
   * 单链表读取
   * @param {*} index
   */
  getElem(index) {
    //这里跟前面的插入和删除不一样，是得到 index 处的节点，所以 p 为 第一个节点
    let i = 1,
      p = this.head.next
    while (p && i < index) {
      p = p.next
      ++i
    }
    //处理越界
    if (!p || i > index) {
      return false
    }
    return p.data
  }

  /**
   * 数组转单链表
   * @param {*} arr
   */
  array2List(arr) {
    if (arr.length === 0) {
      return this
    }
    let i = 0,
      curr = this.head
    for (i; i < arr.length; i++) {
      curr.next = new Node(arr[i])
      curr = curr.next
      ++this.length
    }
    return this
  }

  /**
   * 单链表节点转数组
   * @param {*} node
   */
  list2Array(node) {
    if (!node) {
      return []
    }
    //使用递归，先得到当前节点的数据
    const target = [node.data]
    //然后得到剩余部分的数据
    const rest = this.list2Array(node.next)
    //合并结果
    return target.concat(rest)
  }

/**
 * 头插法实现链表整表创建
 * @param {*} n
 */
createListHead(n) {
  let i = 0,
    node
  for (i; i < n; i++) {
    node = new Node(Number.parseInt(Math.random() * 10 + 1))
    //核心逻辑，新创建的节点指向this.head.next，也就是null
    //this.head.next指向该节点，也就是第一个节点
    //每次创建的都是第一个节点
    node.next = this.head.next
    this.head.next = node
    ++this.length
  }
}

/**
 * 尾插法实现链表整表创建
 * @param {*} n
 */
createListTail(n) {
  let i = 0,
    node = this.head
  for (i; i < n; i++) {
    //尾插法比较容易理解，就是append
    node.next = new Node(Number.parseInt(Math.random() * 10 + 1))
    node = node.next
    ++this.length
  }
}

/**
 * 清空链表
 */
clear() {
  let p = this.head.next,
    q
  while (p) {
    q = p.next
    //释放p free(p)
    p = q
    --this.length
  }
  this.head.next = p
}

  /**
   * 单链表整表转数组
   */
  toArray() {
    return this.list2Array(this.head.next)
  }
}
