import selectionSort from "./index";
import quickSort from "./index1";

describe("排序算法测试", () => {
  test("选择排序，从小到大排列", () => {
    let arr = [6, 1, 4, 9, 5, 8];
    arr = selectionSort(arr);
    expect(arr).toStrictEqual([1, 4, 5, 6, 8, 9]);
  });
});

describe("快速排序测试", () => {
  test("数组只有一个元素", () => {
    let arr = [1];
    arr = quickSort(arr);
    expect(arr).toStrictEqual([1]);
  });

  test("大于一个元素", () => {
    let arr = [6, 1, 4, 9, 5, 8];
    arr = quickSort(arr);
    expect(arr).toStrictEqual([1, 4, 5, 6, 8, 9]);
  });
});
