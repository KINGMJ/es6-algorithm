import { factorial, fibonacci, gcd, reverseList, arr2Tree } from './index'
import { array2List } from '../structure/linkedList'

describe('计算阶乘', () => {
  test('1的阶乘', () => {
    expect(factorial(1)).toStrictEqual(1)
  })
  test('2的阶乘', () => {
    expect(factorial(2)).toStrictEqual(2)
  })
  test('6的阶乘', () => {
    expect(factorial(6)).toStrictEqual(6 * 5 * 4 * 3 * 2 * 1)
  })
})

describe('斐波那契数列', () => {
  test('第一项为1', () => {
    expect(fibonacci(1)).toStrictEqual(1)
  })
  test('第二项为1', () => {
    expect(fibonacci(2)).toStrictEqual(1)
  })
  test('第三项为2', () => {
    expect(fibonacci(3)).toStrictEqual(2)
  })
  test('第九项为34', () => {
    expect(fibonacci(9)).toStrictEqual(34)
  })
})

describe('欧几里得算法，求最大公约数', () => {
  test('1680和640的最大公约数为80', () => {
    expect(gcd(1680, 640)).toStrictEqual(80)
  })
})

describe('单链表反转', () => {
  test('空链表', () => {
    expect(reverseList(null)).toStrictEqual(null)
  })

  test('链表只有一项', () => {
    const linkedList = array2List([1])
    expect(reverseList(linkedList)).toStrictEqual(linkedList)
  })

  test('链表有多项', () => {
    const linkedList = array2List([1, 2, 3, 4])
    expect(reverseList(linkedList)).toStrictEqual(array2List([4, 3, 2, 1]))
  })
})


describe('数组转多叉树', () => {
  test('测试', () => {
    const folders = [
      { id: 1, name: '全部文件', parent_id: null },
      { id: 2, name: '图片', parent_id: 1 },
      { id: 3, name: '文档', parent_id: 1 },
      { id: 4, name: '视频', parent_id: 1 },
      { id: 5, name: '壁纸', parent_id: 2 },
      { id: 6, name: '头像', parent_id: 2 },
      { id: 7, name: '电影', parent_id: 4 },
      { id: 8, name: '纪录片', parent_id: 4 },
      { id: 9, name: '风景', parent_id: 5 },
      { id: 10, name: '动漫', parent_id: 5 },
      { id: 11, name: '游戏', parent_id: 5 }
    ]
    console.log(arr2Tree(folders));
  })
 
})