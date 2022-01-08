import { listInsert, listDelete, getElem } from './index'

describe('线性表顺序存储结构获取元素', () => {
  const arr = [1, 2, 3, 4]
  test('index<1', () => {
    expect(getElem(arr, 0)).toStrictEqual(false)
  })

  test('index>arr.length+1', () => {
    expect(getElem(arr, 5)).toStrictEqual(false)
  })

  test('正常情况', () => {
    expect(getElem(arr, 1)).toStrictEqual(1)
  })
})

describe('线性表顺序存储结构的插入', () => {
  //每次测试前都重置数据
  let arr
  beforeEach(() => {
    arr = [1, 2, 3, 4]
  })

  test('index<1', () => {
    expect(listInsert(arr, 0, 5)).toStrictEqual(false)
  })
  test('index>线性表的长度+1', () => {
    expect(listInsert(arr, 6, 5)).toStrictEqual(false)
  })
  test('从线性表尾部插入', () => {
    listInsert(arr, 5, 5)
    expect(arr).toStrictEqual([1, 2, 3, 4, 5])
    jest.cl
  })
  test('从线性表中间插入', () => {
    listInsert(arr, 2, 5)
    expect(arr).toStrictEqual([1, 5, 2, 3, 4])
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
    const arr = [1, 2, 3]
    const elem = listDelete(arr, 3)
    expect(arr).toStrictEqual([1, 2])
    expect(elem).toStrictEqual(3)
  })
  test('删除中间位置', () => {
    const arr = [1, 2, 3, 4, 5]
    const elem = listDelete(arr, 3)
    expect(arr).toStrictEqual([1, 2, 4, 5])
    expect(elem).toStrictEqual(3)
  })
})
