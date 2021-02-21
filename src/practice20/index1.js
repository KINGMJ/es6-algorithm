import { ListNode } from "../structure/linkedList";

export function addTwoNumbers(l1, l2) {
  //用数组的push和pop模拟栈
  const stack1 = [];
  const stack2 = [];
  while (l1 != null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2 != null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  const head = new ListNode(null);
  let carry = 0;
  //头插法构建链表
  while (stack1.length || stack2.length || carry === 1) {
    const sum =
      (stack1.length ? stack1.pop() : 0) +
      (stack2.length ? stack2.pop() : 0) +
      carry;
    carry = (sum / 10) | 0;

    const node = new ListNode(sum % 10);
    node.next = head.next;
    head.next = node;
  }
  return head.next;
}
