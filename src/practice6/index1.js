/**
 * 判断链表是否有环，双指针快慢指针解法
 * @param {ListNode} head 
 * @return {ListNode}
 */
export function hasCycle(head) {
  let slowPos = head, fastPos = head
  while (fastPos) {
    if (fastPos.next == null) {
      return false
    }
    slowPos = slowPos.next
    fastPos = fastPos.next.next
    if (slowPos == fastPos) {
      return true
    }
  }
  return false
}