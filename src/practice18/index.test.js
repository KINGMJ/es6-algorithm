import { selectionSort } from "./index";
import { quickSort } from "./index1";
import { bubbleSort } from "./index2";
import { insertionSort } from "./index3";
import { shellSort } from "./index4";
import { headSort } from "./index5";
import { mergeSort } from "./index6";

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

  test("[6, 4, 1, 2, 5]", () => {
    let arr = [6, 4];
    arr = insertionSort(arr);
    console.log(arr)
    expect(arr).toStrictEqual([4, 6]);
  });
});

describe("希尔排序算法", () => {
  test("[8,9,1,7,2,3,5,4,6,0]", () => {
    let arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];
    arr = shellSort(arr);
    expect(arr).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe("堆排序算法", () => {
  test("[50,10,90,30,70,40,80,60,20]", () => {
    let arr = [50, 10, 90, 30, 70, 40, 80, 60, 20];
    arr = headSort(arr);
    expect(arr).toStrictEqual([10, 20, 30, 40, 50, 60, 70, 80, 90]);
  });
});

describe("归并排序算法", () => {
  test("[50,10,90,30,70,40,80,60,20]", () => {
    let arr = [50, 10, 90, 30, 70, 40, 80, 60, 20];
    arr = mergeSort(arr);
    expect(arr).toStrictEqual([10, 20, 30, 40, 50, 60, 70, 80, 90]);
  });
});
