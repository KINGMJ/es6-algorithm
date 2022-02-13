import { ALGraph as g } from './graph'

let found = false

export function dfsSearch1(s, t) {
  if (s == t) {
    return
  }
  const visited = [] // 使用一个 visited 数组保存顶点是否访问过
  const prev = [] // 记录搜索路径

  // 初始化，所有的顶点都是未访问状态
  for (let i = 0; i < g.numVertexes; i++) {
    visited[i] = false
    prev[i] = -1
  }

  dfs(s, t, visited, prev)
  console.log(prev)

  // 保存最终的路径
  const res = []
  print(res, prev, s, t)
  return res
}

/**
 *
 * @param {*} w
 * @param {*} t
 * @param {*} visited
 * @param {*} prev
 */
function dfs(w, t, visited, prev) {
  if (found == true) {
    return
  }
  visited[w] = true
  // 已经找到终止节点
  if (w == t) {
    found = true
    return
  }
  // 邻接表的递归方式跟邻接矩阵是一样的，只不过这里换成链表的方式
  let node = g.adjList[w].firstEdge
  while (node) {
    if (!visited[node.adjVex]) {
      prev[node.adjVex] = w
      dfs(node.adjVex, t, visited, prev)
    }
    node = node.next
  }
}

/**
 * 打印最终的路径
 * @param {*} res 最终结果
 * @param {*} prev 路径数组
 * @param {*} s 起始点
 * @param {*} t 终止点
 */
function print(res, prev, s, t) {
  if (prev[t] != -1 && t != s) {
    print(res, prev, s, prev[t])
  }
  res.push(g.adjList[t].data)
}
