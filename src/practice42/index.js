export function dfsTraverse(g) {
  const res = [] //保存到遍历结果到数组中

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
    res.push(g.vexs[i])
    for (let j = 0; j < g.numVertexes; j++) {
      // 如果有边，并且没有被访问过，继续 dfs
      if (g.arc[i][j] == 1 && !visited[j]) {
        dfs(g, j)
      }
    }
  }
  return res
}
