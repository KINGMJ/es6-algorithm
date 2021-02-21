import reverseList from "../practice16/index";
import { ListNode } from "../structure/linkedList";

export function addTwoNumbers(l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  let p = l1,
    q = l2,
    carry = 0; //进位
  const res = new ListNode(null);
  let cur = res;
  while (p || q || carry === 1) {
    const sum = (p ? p.val : 0) + (q ? q.val : 0) + carry;
    carry = (sum / 10) | 0;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    if (p) {
      p = p.next;
    }
    if (q) {
      q = q.next;
    }
  }
  return reverseList(res.next);
}
