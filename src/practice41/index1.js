const prompt = require('prompt')
const utils = require('util')

prompt.start()

async function createALGraph() {
  const g = {
    adjList: [], // 邻接表，数组里面存的是链表
  }

  console.log('请输入顶点数和边数\n')
  const { numVertexes, numEdges } = await prompt.get(['numVertexes', 'numEdges'])

  for (let i = 0; i < numVertexes; i++) {
    const { vex } = await prompt.get(['vex'])
    // 读入顶点信息
    g.adjList[i] = {}
    g.adjList[i].data = vex
    // 将边表置为空表
    g.adjList[i].firstEdge = null
  }

  // 建立边表
  console.log('输入边 (vi, vj) 上的顶点序号：\n')
  for (let k = 0; k < numEdges; k++) {
    const { i, j } = await prompt.get(['i', 'j'])
    // 模拟一个链表，生成边表节点
    const nodeA = { adjVex: {}, next: {} }
    nodeA.adjVex = j // 邻接序号为 j
    // 使用头插法进行插入
    nodeA.next = g.adjList[i].firstEdge
    g.adjList[i].firstEdge = nodeA

    // 对于邻接表，需要同时存另一个顶点的边表
    const nodeB = { adjVex: {}, next: {} }
    nodeB.adjVex = i // 邻接序号为 i
    nodeB.next = g.adjList[j].firstEdge
    g.adjList[j].firstEdge = nodeB
  }

  // utils.inspect 可以获取完整的 object 对象
  console.log(utils.inspect(g, { showHidden: false, depth: null }))
}

createALGraph()

// 邻接表结果
const g = {
  adjList: [
    {
      data: 'a',
      firstEdge: {
        adjVex: '3',
        next: { adjVex: '2', next: { adjVex: '1', next: null } },
      },
    },
    {
      data: 'b',
      firstEdge: {
        adjVex: '6',
        next: {
          adjVex: '5',
          next: { adjVex: '4', next: { adjVex: '0', next: null } },
        },
      },
    },
    {
      data: 'c',
      firstEdge: { adjVex: '6', next: { adjVex: '0', next: null } },
    },
    { data: 'd', firstEdge: { adjVex: '0', next: null } },
    {
      data: 'e',
      firstEdge: { adjVex: '5', next: { adjVex: '1', next: null } },
    },
    {
      data: 'f',
      firstEdge: { adjVex: '4', next: { adjVex: '1', next: null } },
    },
    {
      data: 'g',
      firstEdge: { adjVex: '2', next: { adjVex: '1', next: null } },
    },
  ],
}
