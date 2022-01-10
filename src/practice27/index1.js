export function levelOrder(root) {
  //异常处理
  if (root == null) {
    return []
  }
  const res = [] //最终的结果
  const queue = [] //用数组模拟队列
  queue.push(root)

  while (queue.length) {
    //用一个临时数组保存每一层遍历的结果
    const tempArr = []
    //每一层遍历前，记录一下该层的节点个数
    const queueSize = queue.length
    for (let i = 0; i < queueSize; i++) {
      //内部逻辑跟传统BFS一样
      root = queue.shift()
      tempArr.push(root.val)
      if (!!root.left) {
        queue.push(root.left)
      }
      if (!!root.right) {
        queue.push(root.right)
      }
    }
    //把每一层遍历的结果push到res中
    res.push(tempArr)
  }
  return res
}
