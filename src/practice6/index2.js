/**
 * 判断链表是否有环， JSON.stringify特性
 * @param {ListNode} head 
 * @return {ListNode}
 */
export function hasCycle(head) {
  try {
    JSON.stringify(head);
    return false;
  }
  catch (err) {
    return true;
  }
}