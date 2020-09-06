import { kthGrammar } from './index'

describe('第K个语法符号测试', () => {
  test('N=1，K=1', () => {
    expect(kthGrammar(1, 1)).toStrictEqual(0)
  })
  test('N=2,K=1', () => {
    expect(kthGrammar(2, 1)).toStrictEqual(0)
  })
  test('N=2,K=2', () => {
    expect(kthGrammar(2, 2)).toStrictEqual(1)
  })
  test('N=4,K=5', () => {
    expect(kthGrammar(4, 5)).toStrictEqual(1)
  })
})