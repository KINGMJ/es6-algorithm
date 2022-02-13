import { ALGraph as g } from './graph'

export function bfsSearch1(s, t) {
  if (s == t) {
    return
  }

  const prev = [] // 记录搜索路径
  const queue = [] // 用数组模拟一个队列
  const visited = [] // 保存访问过的顶点

  // 初始化，所有的顶点都是未访问状态
  for (let i = 0; i < g.numVertexes; i++) {
    visited[i] = false
    prev[i] = -1
  }

  // 处理起始点 s
  visited[s] = true
  queue.push(s)

  // 队列不为空
  while (queue.length > 0) {
    // 出队列
    const w = queue.shift()
    // 找到当前顶点边表链表头指针
    let node = g.adjList[w].firstEdge
    while (node) {
      // 若此顶点没有被访问
      if (!visited[node.adjVex]) {
        // prev 数组中 j 的位置存储它的前驱顶点
        prev[node.adjVex] = w
        if (node.adjVex == t) {
          console.log(prev)
          // 保存最终的最短路径
          const res = []
          print(res, prev, s, t)
          return res
        }
        visited[node.adjVex] = true
        // 将此顶点入队列
        queue.push(node.adjVex)
      }
      // 指针指向下一个结点
      node = node.next
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
  res.push(g.adjList[t].data)
}
