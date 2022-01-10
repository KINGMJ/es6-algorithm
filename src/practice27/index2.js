export function levelOrder(root) {
  //异常处理
  if (root == null) {
    return []
  }
  const res = [] //最终的结果
  const queue = [] //用数组模拟队列
  queue.push(root)

  while (queue.length) {
    //每一层开始遍历前，先push一个空数组到res中
    res.push([])
    //每一层遍历前，记录一下该层的节点个数
    const queueSize = queue.length
    for (let i = 0; i < queueSize; i++) {
      //内部逻辑跟传统BFS一样
      root = queue.shift()
      //找到末端的空数组，push到该数组
      res[res.length - 1].push(root.val)

      if (!!root.left) {
        queue.push(root.left)
      }
      if (!!root.right) {
        queue.push(root.right)
      }
    }
  }
  return res
}
