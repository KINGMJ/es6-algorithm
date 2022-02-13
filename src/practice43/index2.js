import { MGraph as g } from './graph'
/**
 *
 * @param {*} s 起始点
 * @param {*} t 终止点
 * @returns
 */
export function bfsSearch(s, t) {
  //边界处理
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
    // 对于该顶点，判断其它顶点是否跟它是边关系，并且没有被访问过
    for (let j = 0; j < g.numVertexes; j++) {
      if (g.arc[w][j] == 1 && !visited[j]) {
        // prev 数组中 j 的位置存储它的前驱顶点
        prev[j] = w
        // 如果找到了 t，处理最终的路径
        if (j == t) {
          console.log(prev)
          // 保存最终的最短路径
          const res = []
          print(res, prev, s, t)
          return res
        }
        // 将找到的顶点标记为已访问
        visited[j] = true
        // 将找到的顶点入队列
        queue.push(j)
      }
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
