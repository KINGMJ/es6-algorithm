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