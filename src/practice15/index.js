import { ListNode } from '../structure/linkedList'

export default function removeZeroSumSublists(head) {
  const dummy = new ListNode(null)
  dummy.next = head
  const map = new Map()
  let sum = 0
  //首次遍历，生成哈希表，key为当前节点总和，value为当前节点
  for (let p = dummy; p !== null; p = p.next) {
    sum += p.val
    map.set(sum, p)
  }

  //第二次遍历，如果当前节点处sum在下一处出现，表明两节点之间所有节点的和为0，直接删除区间所有节点
  sum = 0
  console.log(dummy)
  for (let q = dummy; q !== null; q = q.next) {
    sum += q.val
    q.next = map.get(sum).next
  }
  return dummy.next
}