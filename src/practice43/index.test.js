import { dfsSearch } from './index'
import { dfsSearch1 } from './index1'
import { bfsSearch } from './index2'
import { bfsSearch1 } from './index3'

describe('图的搜索算法', () => {
  test('邻接矩阵 DFS', () => {
    expect(dfsSearch(0, 6)).toStrictEqual(['a', 'b', 'g'])
  })
  test('邻接表 DFS', () => {
    expect(dfsSearch1(0, 6)).toStrictEqual(['a', 'b', 'g'])
  })
  test('邻接矩阵的 BFS 算法', () => {
    expect(bfsSearch(0, 6)).toStrictEqual(['a', 'b', 'g'])
  })

  test('邻接表的 BFS 算法', () => {
    expect(bfsSearch1(0, 6)).toStrictEqual(['a', 'b', 'g'])
  })
})
