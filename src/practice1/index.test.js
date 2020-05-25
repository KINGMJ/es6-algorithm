import { twoSum } from './index'

test('test1', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('test2', () => {
  expect(twoSum([3, 7, 8, 12], 20)).toStrictEqual([2, 3]);
})
