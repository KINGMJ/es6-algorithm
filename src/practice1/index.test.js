import { twoSum } from './index2'

test('test1', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
})

test('test2', () => {
  expect(twoSum([3, 7, 8, 12], 20)).toStrictEqual([2, 3])
})

test('test3', () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2])
})

test('test4', () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1])
})

