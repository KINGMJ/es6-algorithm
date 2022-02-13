export function dfsTraverse1(g) {
  const res = []
  // 使用一个 visited 数组保存顶点是否访问过
  const visited = []
  // 初始化，所有的顶点都是未访问状态
  for (let i = 0; i < g.numVertexes; i++) {
    visited[i] = false
  }

  // 遍历所有的顶点，如果没有被访问过，对每个顶点进行 dfs 处理
  for (let i = 0; i < g.numVertexes; i++) {
    if (!visited[i]) {
      dfs(g, i)
    }
  }

  /**
   *
   * @param {*} g 图
   * @param {*} i 顶点
   */
  function dfs(g, i) {
    visited[i] = true
    // 保存顶点
    res.push(g.adjList[i].data)
    // 邻接表的递归方式跟邻接矩阵是一样的，只不过这里换成链表的方式
    let node = g.adjList[i].firstEdge
    while (node) {
      if (!visited[node.adjVex]) {
        dfs(g, node.adjVex)
      }
      node = node.next
    }
  }

  return res
}
