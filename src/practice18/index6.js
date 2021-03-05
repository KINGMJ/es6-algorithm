export function mergeSort(arr) {
  function mSort(arr, temp, index, length) {
    //递归结束条件，如果最后分的数组元素为一个，则结束，并且它是有序的
    if (index < length) {
      //将 original 数组平分为 original[index...divide] 和 original[divide+1...length]
      let divide = Number.parseInt((index + length) / 2);
      //分别递归将分开的两组数组归并为有序的
      //递归把 original[index...divide] 归并为 orderedArr[index...divide]
      mSort(arr, temp, index, divide);
      //递归把 original[divide+1...length] 归并为 orderedArr[divide+1...length]
      mSort(arr, temp, divide + 1, length);
      //将 orderedArr[index...divide] 和 orderedArr[divide+1...length] 归并到 sorted[index...length]
      temp = mergeArr(arr, temp, index, divide, length);
    }
    return temp;
  }

  /**
   * 将有序的 orderedArr[index...divide] 和 orderedArr[divide+1,length] 归并为有序的 sorted[index...length]
   * @param {*} orderedArr
   * @param {*} sorted
   * @param {*} index
   * @param {*} divide
   * @param {*} length
   */
  function mergeArr(arr, temp, index, divide, length) {
    let i, j, k;

    //i作为 temp数组的下标
    //j为右边数组的第一个元素 ，它应该小于等于右边数组的长度
    //index为左边数组的第一个元素，它应该小于等于左边数组的长度
    for (i = index, j = divide + 1; index <= divide && j <= length; i++) {
      //开始排序
      //如果左边第一个元素小于右边第一个元素，就把左边第一个元素存放到 temp 的第一个元素，index+1与右边第一个元素进行比较
      if (arr[index] < arr[j]) {
        temp[i] = arr[index++];
      } else {
        //如果左边第一个元素大于右边第一个元素，就把右边第一个元素存放到 temp 的第一个元素，j+1与左边第一个元素进行比较
        temp[i] = arr[j++];
      }
      //一直这样比较，因为两边的长度不一样，最后有一边会多出来元素
      if (index <= divide) {
        for (k = 0; k <= divide - index; k++) {
          temp[i + k] = arr[index + k];
        }
      }

      if (j <= length) {
        for (k = 0; k <= length - j; k++) {
          temp[i + k] = arr[j + k];
        }
      }
    }

    return temp;
  }

  let temp = [];
  arr.unshift(0);
  return mSort(arr, temp, 1, arr.length - 1);
}
