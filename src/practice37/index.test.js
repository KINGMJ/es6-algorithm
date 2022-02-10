import { isAnagram } from './index'

describe('有效的字母异位词', () => {
  test('', () => {
    expect(isAnagram('哈哈第aaa', 'aaa哈哈第')).toStrictEqual(true)
  })
})
