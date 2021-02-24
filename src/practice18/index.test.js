import selectionSort from "./index";
import quickSort from "./index1";
import bubbleSort from "./index2";
import insertionSort from "./index3";

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

describe("冒泡排序测试", () => {
  test("[9,1,5,8,3,7,4,6,2]", () => {
    let arr = [9, 1, 5, 8, 3, 7, 4, 6, 2];
    arr = bubbleSort(arr);
    expect(arr).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe("插入排序测试", () => {
  test("[7,6,9,3,1,5,2,4]", () => {
    let arr = [7, 6, 9, 3, 1, 5, 2, 4];
    arr = insertionSort(arr);
    expect(arr).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 9]);
  });
});
