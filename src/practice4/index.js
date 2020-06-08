//声明一个单链表结点
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * 数组转链表
 * @param {Array} arr 
 * @return {ListNode} 
 */
export function array2List(arr) {
  if (arr.length === 0) {
    return null;
  }
  const head = new ListNode(null);
  let i = 0, curr = head;
  for (i; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head.next;
}



/**
 * 两数相加
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @return {ListNode}
 */
export function addTwoNumbers(l1, l2) {
  return l2;
}