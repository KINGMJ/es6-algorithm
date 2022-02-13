import { MGraph, ALGraph } from './graph'

import { dfsTraverse } from './index'
import { dfsTraverse1 } from './index1'
import { bfsTraverse } from './index2'
import { bfsTraverse1 } from './index3'

describe('图的 DFS 和 BFS 算法', () => {
  test('邻接矩阵 DFS', () => {
    expect(dfsTraverse(MGraph)).toStrictEqual(['a', 'b', 'e', 'f', 'g', 'c', 'd'])
  })
  test('邻接表 DFS', () => {
    expect(dfsTraverse1(ALGraph)).toStrictEqual(['a', 'b', 'e', 'f', 'g', 'c', 'd'])
  })
  test('邻接矩阵的 BFS 算法', () => {
    expect(bfsTraverse(MGraph)).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
  })

  test('邻接表的 BFS 算法', () => {
    expect(bfsTraverse1(ALGraph)).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
  })
})
