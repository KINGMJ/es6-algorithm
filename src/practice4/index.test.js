import { addTwoNumbers } from './index'
import { array2List } from '../structure/linkedList'

describe('用链表来实现两数相加', () => {
  test('两个链表都为空', () => {
    const p1 = array2List([]);
    const p2 = p1;
    expect(addTwoNumbers(p1, p2)).toStrictEqual(null);
  })

  test('第一个链表为空，第二个不为空 -> 0 + 321 = 321', () => {
    const p1 = array2List([]);
    const p2 = array2List([1, 2, 3])
    expect(addTwoNumbers(p1, p2)).toStrictEqual(p2);
  })

  test('第一个链表不为空，第二个为空 -> 321 + 0 = 321', () => {
    const p1 = array2List([1, 2, 3]);
    const p2 = array2List([])
    expect(addTwoNumbers(p1, p2)).toStrictEqual(p1);
  })

  test('链表1的长度比链表2小，无进位 -> 10 + 321 = 331', () => {
    const p1 = array2List([0, 1]);
    const p2 = array2List([1, 2, 3])
    expect(addTwoNumbers(p1, p2)).toStrictEqual(array2List([1, 3, 3]));
  })

  test('链表1的长度比链表2小，有进位 -> 99 + 321 = 420', () => {
    const p1 = array2List([9, 9]);
    const p2 = array2List([1, 2, 3])
    expect(addTwoNumbers(p1, p2)).toStrictEqual(array2List([0, 2, 4]));
  })

  test('链表1的长度比链表2大，无进位 -> 321 + 10 = 331', () => {
    const p1 = array2List([1, 2, 3])
    const p2 = array2List([0, 1]);
    expect(addTwoNumbers(p1, p2)).toStrictEqual(array2List([1, 3, 3]));
  })

  test('链表1的长度比链表2大，有进位 -> 321 + 99 = 420', () => {
    const p1 = array2List([1, 2, 3])
    const p2 = array2List([9, 9]);
    expect(addTwoNumbers(p1, p2)).toStrictEqual(array2List([0, 2, 4]));
  })

  test('链表1的长度跟链表2一致，无进位 -> 120 + 321 = 531', () => {
    const p1 = array2List([0, 1, 2])
    const p2 = array2List([1, 2, 3]);
    expect(addTwoNumbers(p1, p2)).toStrictEqual(array2List([1, 3, 5]));
  })

  test('链表1的长度跟链表2一致，有进位 -> 19 + 11 = 30', () => {
    const p1 = array2List([9, 1])
    const p2 = array2List([1, 1]);
    expect(addTwoNumbers(p1, p2)).toStrictEqual(array2List([0, 3]));
  })

  test('链表1的长度跟链表2一致，有进位导致链表长度变长 -> 99 + 99 = 198', () => {
    const p1 = array2List([9, 9])
    const p2 = array2List([9, 9]);
    expect(addTwoNumbers(p1, p2)).toStrictEqual(array2List([8, 9, 1]));
  })
})
