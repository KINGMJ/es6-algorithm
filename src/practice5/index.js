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
 * 奇偶链表
 * @param {ListNode} head 
 * @return {ListNode}
 */
export function oddEvenList(head) {
  //如果是空链表，返回空
  if (head == null) {
    return null
  }

  //声明奇偶链表的头指针和尾指针
  let odd = head, even = head.next, evenHead = even;
  while (even != null && even.next != null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
}