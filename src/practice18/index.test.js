import selectionSort from './index'
describe('排序算法测试', () => {
  test('选择排序，从小到大排列', () => {
    let arr = [6, 1, 4, 9, 5, 8]
    arr = selectionSort(arr)
    expect(arr).toStrictEqual([1, 4, 5, 6, 8, 9])
  })
})