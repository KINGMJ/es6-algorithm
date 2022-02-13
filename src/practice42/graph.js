// 邻接矩阵
const MGraph = {
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
  numVertexes: 7,
  numEdges: 8,
}

// 邻接表
const ALGraph = {
  adjList: [
    {
      data: 'a',
      firstEdge: {
        adjVex: '1',
        next: { adjVex: '2', next: { adjVex: '3', next: null } },
      },
    },
    {
      data: 'b',
      firstEdge: {
        adjVex: '4',
        next: {
          adjVex: '5',
          next: { adjVex: '6', next: { adjVex: '0', next: null } },
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
  numVertexes: '7',
  numEdges: '8',
}

export { MGraph, ALGraph }
