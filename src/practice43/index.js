import { MGraph as g } from './graph'

let found = false // 是否已经找到终止节点

export function dfsSearch(s, t) {
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
 * @param {*} w 开始顶点
 * @param {*} t 终止顶点
 * @param {*} visited 已经访问过的顶点
 * @param {*} prev 搜索路径
 */
function dfs(w, t, visited, prev) {
  if (found == true) {
    return
  }
  visited[w] = true
  // 已经找到终止顶点
  if (w == t) {
    found = true
    return
  }

  for (let j = 0; j < g.numVertexes; j++) {
    // 如果有边，并且没有被访问过，继续 dfs
    if (g.arc[w][j] == 1 && !visited[j]) {
      prev[j] = w
      dfs(j, t, visited, prev)
    }
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
  res.push(g.vexs[t])
}
