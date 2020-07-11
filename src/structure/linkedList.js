/**
 * 链表数据结构
 */

//声明一个链表结点
export class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * 数组转链表
 * @param {Array} arr 
 * @return {ListNode} 
 */
export function array2List(arr) {
  if (arr.length === 0) {
    return null
  }
  const head = new ListNode(null);
  let i = 0, curr = head
  for (i; i < arr.length; i++) {
    curr.next = new ListNode(arr[i])
    curr = curr.next
  }
  return head.next
}

/**
 * 
 * 环形链表实现
 * head = [3,2,0,-4], pos = 1
 * 3->2->0->-4->2->0->-4->2...
 * @param {Array} arr 
 * @param {Integer} index 
 * @return {ListNode}
 */
export function cycleList(arr, index) {
  const linkedList = array2List(arr)
  let i = 1, circle, p = linkedList
  while (p.next) {
    if (i == index + 1) {
      circle = p
    }
    p = p.next
    ++i
  }
  p.next = circle
  return linkedList
}
