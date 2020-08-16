export default function reverseList(head) {
  if (head == null || head.next == null) return head
  const p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
}