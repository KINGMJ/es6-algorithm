export function bfsTraverse(g) {
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
    res.push(g.vexs[i])

    // 进队列
    queue.push(i) // 存储顶点的坐标

    // 队列不为空
    while (queue.length > 0) {
      // 出队列
      const w = queue.shift()
      // 对于该顶点，判断其它顶点是否跟它是边关系，并且没有被访问过
      for (let j = 0; j < g.numVertexes; j++) {
        if (g.arc[w][j] == 1 && !visited[j]) {
          // 将找到的顶点标记为已访问
          visited[j] = true
          // 存储已经访问的节点
          res.push(g.vexs[j])
          // 将找到的顶点入队列
          queue.push(j)
        }
      }
    }
  }
  return res
}
