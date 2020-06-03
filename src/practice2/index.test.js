import { listInsert, listDelete } from './index'

describe('线性表顺序存储结构的插入', () => {
  test('index<1', () => {
    expect(listInsert([1, 2, 3, 4], 0, 5)).toStrictEqual(false)
  })
  test('index>线性表的长度+1', () => {
    expect(listInsert([1, 2, 3, 4], 6, 5)).toStrictEqual(false)
  })
  test('从线性表尾部插入', () => {
    expect(listInsert([1, 2, 3, 4], 5, 5)).toStrictEqual([1, 2, 3, 4, 5])
  })
  test('从线性表中间插入', () => {
    expect(listInsert([1, 2, 3, 4], 2, 5)).toStrictEqual([1, 5, 2, 3, 4])
  })
})

describe('线性表顺序存储结构的删除', () => {
  test('线性表为空', () => {
    expect(listDelete([], 1)).toStrictEqual(false)
  })
  test('删除的位置不对', () => {
    expect(listDelete([1, 2, 3], 0)).toStrictEqual(false)
  })
  test('删除最后数据', () => {
    expect(listDelete([1, 2, 3], 3)).toStrictEqual([1, 2])
  })
  test('删除中间位置', () => {
    expect(listDelete([1, 2, 3, 4, 5], 3)).toStrictEqual([1, 2, 4, 5])
  })
})
