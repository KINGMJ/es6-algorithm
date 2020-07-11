import { matchesProperty } from "lodash";

//声明一个单链表结点
class ListNode {
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
function array2List(arr) {
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


/**
 * 判断链表是否有环
 * @param {ListNode} head 
 * @return {ListNode}
 */
export function hasCycle(head) {
  const map = new Map()
  while (head) {
    if (map.has(head)) {
      return true
    }
    map.set(head, true)
    head = head.next
  }
  return false
}