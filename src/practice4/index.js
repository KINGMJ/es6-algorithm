import { ListNode } from '../structure/linkedList'

/**
 * 两数相加
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @return {ListNode}
 */
export function addTwoNumbers(l1, l2) {
  //声明一个head节点
  const head = new ListNode(null);
  //当前节点
  let curr = head;
  //进位
  let carry = 0;
  //当两个链表都不为空时，每位相加
  while (l1 != null || l2 != null) {
    //链表长度不一致，缺位补0
    let x = l1 != null ? l1.val : 0;
    let y = l2 != null ? l2.val : 0;
    let sum = x + y + carry;
    carry = Number.parseInt(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1 != null) {
      l1 = l1.next;
    }
    if (l2 != null) {
      l2 = l2.next;
    }
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return head.next;
}