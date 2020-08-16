export default function reverseList(linkedList) {
  //定义三个指针：前一个节点，当前节点，下一个节点
  let prev = null
  let curr = linkedList
  let nextTemp
  while (curr != null) {
    //存储下一个节点
    nextTemp = curr.next
    //把当前节点的next设置为prev
    curr.next = prev
    //当前节点变成上一个节点
    prev = curr
    //下一个节点变成当前节点
    curr = nextTemp
  }
  return prev
}