export function mergeSort(arr) {
  mSort(arr, arr, 1, arr.length);

  function mSort(original, sorted, index, length) {
    //数据平分的区域
    let divide;
    //有序的数组
    let orderedArr;

    //递归结束条件，如果最后分的数组元素为一个，则结束，并且它是有序的
    if (index == length) {
      sorted[index] == original[index];
    } else {
      //将 original 数组平分为 original[index...divide] 和 original[divide+1...length]
      divide = Number.parseInt((index + length) / 2);
      //分别递归将分开的两组数组归并为有序的
      //递归把 original[index...divide] 归并为 orderedArr[index...divide]
      mSort(original, orderedArr, index, divide);
      //递归把 original[divide+1...length] 归并为 orderedArr[divide+1...length]
      mSort(original, orderedArr, divide + 1, length);
      //将 orderedArr[index...divide] 和 orderedArr[divide+1...length] 归并到 sorted[index...length]
      mergeArr(orderedArr, sorted, index, divide, length);
    }
  }

  /**
   * 将有序的 orderedArr[index...divide] 和 orderedArr[divide+1,length] 归并为有序的 sorted[index...length]
   * @param {*} orderedArr
   * @param {*} sorted
   * @param {*} index
   * @param {*} divide
   * @param {*} length
   */
  function mergeArr(orderedArr, sorted, index, divide, length) {
    let i, j, k;

    //i作为 sorted数组的下标
    //j为右边数组的第一个元素 ，它应该小于等于右边数组的长度
    //index为左边数组的第一个元素，它应该小于等于左边数组的长度
    for (i = index, j = divide + 1; index <= divide && j <= length; i++) {
      //开始排序
      //如果左边第一个元素小于右边第一个元素，就把左边第一个元素存放到 sorted 的第一个元素，index+1与右边第一个元素进行比较
      if (orderedArr[index] < orderedArr[j]) {
        sorted[i] = orderedArr[index++];
      } else {
        //如果左边第一个元素大于右边第一个元素，就把右边第一个元素存放到 sorted 的第一个元素，j+1与左边第一个元素进行比较
        sorted[i] = orderedArr[j++];
      }
      //一直这样比较，因为两边的长度不一样，最后有一边会多出来元素
      if (index <= divide) {
        for (k = 0; k <= divide - index; k++) {
          sorted[i + k] = orderedArr[index + k];
        }
      }

      if (j <= length) {
        for (k = 0; k <= length - j; k++) {
          sorted[i + k] = orderedArr[j + k];
        }
      }
    }
  }
}
