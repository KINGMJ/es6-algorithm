const prompt = require('prompt')

prompt.start()

// 构建无向量图的邻接矩阵表示
async function createMGraph() {
  // 领接矩阵
  const g = {
    vexs: [], // 顶点数组
    arc: [], // 边数组
  }
  console.log('请输入顶点数和边数\n')
  const { numVertexes, numEdges } = await prompt.get(['numVertexes', 'numEdges'])

  // 读入顶点信息，建立顶点表
  for (let i = 0; i < numVertexes; i++) {
    const { vex } = await prompt.get(['vex'])
    g.vexs.push(vex)
  }

  // 邻接矩阵初始化
  for (let i = 0; i < numVertexes; i++) {
    g.arc[i] = new Array()
    for (let j = 0; j < numVertexes; j++) {
      g.arc[i].push(0)
    }
  }

  // 邻接矩阵填充，因为是无向图，矩阵对称，所以只需要填充边数的次数
  console.log('输入边 (vi,vj) 上的下标 i ，下标 j，和权 w：\n')
  for (let k = 0; k < numEdges; k++) {
    const { i, j } = await prompt.get(['i', 'j'])
    // w 这里我们默认为 1，实现一个无权图
    // g.arc[i][j] = parseInt(w)
    g.arc[i][j] = 1
    g.arc[j][i] = g.arc[i][j] // 处理对称
  }

  // 返回构建好的图
  console.log(g)
  return g
}

createMGraph()

//邻接矩阵结果
const mGraph = {
  vexs: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  arc: [
    [0, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
  ],
}
