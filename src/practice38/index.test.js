import { isValid } from './index'

describe('有效的括号', () => {
  test('()', () => {
    expect(isValid('()')).toStrictEqual(true)
  })

  test('()[]{}', () => {
    expect(isValid('()[]{}')).toStrictEqual(true)
  })

  test('(]', () => {
    expect(isValid('(]')).toStrictEqual(false)
  })
})
