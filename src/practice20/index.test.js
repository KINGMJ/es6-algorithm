import { addTwoNumbers } from "./index1";
import { array2List } from "../structure/linkedList";

describe("两数相加", () => {
  test("无进位：(4 -> 5 -> 6) + (1 -> 2 -> 3) = 5 -> 7 -> 9", () => {
    const l1 = array2List([4, 5, 6]);
    const l2 = array2List([1, 2, 3]);
    expect(addTwoNumbers(l1, l2)).toStrictEqual(array2List([5, 7, 9]));
  });

  test("有进位: (4 -> 5 -> 6) + (4 -> 5 -> 6) = 9 -> 1-> 2", () => {
    const l1 = array2List([4, 5, 6]);
    const l2 = array2List([4, 5, 6]);
    expect(addTwoNumbers(l1, l2)).toStrictEqual(array2List([9, 1, 2]));
  });

  test("位数不等：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4) = 7 -> 8 -> 0 -> 7", () => {
    const l1 = array2List([7, 2, 4, 3]);
    const l2 = array2List([5, 6, 4]);
    expect(addTwoNumbers(l1, l2)).toStrictEqual(array2List([7, 8, 0, 7]));
  });
});
