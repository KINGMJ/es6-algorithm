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