export function bfsTraverse1(g) {
  const res = [] // 访问结果数组
  const queue = [] // 用数组模拟一个队列
  const visited = [] // 保存访问过的顶点

  // 初始化，所有的顶点都是未访问状态
  for (let i = 0; i < g.numVertexes; i++) {
    visited[i] = false
  }

  // 遍历每一个顶点
  for (let i = 0; i < g.numVertexes; i++) {
    // 如果顶点已经访问过，退出这层循环
    if (visited[i]) {
      continue
    }
    // 设置访问状态为 true，并存储访问过的节点
    visited[i] = true
    res.push(g.adjList[i].data)

    // 进队列
    queue.push(i) // 存储顶点的坐标

    // 队列不为空
    while (queue.length > 0) {
      // 出队列
      const w = queue.shift()
      // 找到当前顶点边表链表头指针
      let node = g.adjList[w].firstEdge
      while (node) {
        // 若此顶点没有被访问
        if (!visited[node.adjVex]) {
          visited[node.adjVex] = true
          res.push(g.adjList[node.adjVex].data)
          // 将此顶点入队列
          queue.push(node.adjVex)
        }
        // 指针指向下一个结点
        node = node.next
      }
    }
  }
  return res
}
