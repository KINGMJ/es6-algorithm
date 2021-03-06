export function mergeSort(arr) {
  function mSort(arr, sortedArr, index, length) {
    let temp = [];
    //递归结束条件，如果最后分的数组元素为一个，则结束，并且它是有序的
    if (index == length) {
      sortedArr[index] = arr[index];
    } else {
      //将 arr 数组平分为 arr[index...divide] 和 arr[divide+1...length]
      let divide = Number.parseInt((index + length) / 2);
      //分别递归将分开的两组数组归并为有序的
      //递归把 arr[index...divide] 归并为 temp[index...divide]
      mSort(arr, temp, index, divide);
      console.log("左边排好序的数组：");
      console.log(temp);
      //递归把 arr[divide+1...length] 归并为 temp[divide+1...length]
      mSort(arr, temp, divide + 1, length);
      console.log("右边排好序的数组：");
      console.log(temp);
      //将 temp[index...divide] 和 temp[divide+1...length] 归并到 sortedArr[index...length]
      // console.log(temp);
      mergeArr(temp, sortedArr, index, divide, length);
      console.log("归并后的的数组：");
      console.log(sortedArr);
    }
  }

  /**
   * 将有序的 temp[index...divide] 和 temp[divide+1,length] 归并为有序的 sorted[index...length]
   * @param {*} temp
   * @param {*} sorted
   * @param {*} index
   * @param {*} divide
   * @param {*} length
   */
  function mergeArr(temp, sorted, index, divide, length) {
    console.log("待排序的数组：");
    console.log(temp);

    let i, j, k;
    //i作为 temp数组的下标
    //j为右边数组的第一个元素 ，它应该小于等于右边数组的长度
    //index为左边数组的第一个元素，它应该小于等于左边数组的长度
    for (i = index, j = divide + 1; index <= divide && j <= length; i++) {
      //开始排序
      //如果左边第一个元素小于右边第一个元素，就把左边第一个元素存放到 temp 的第一个元素，index+1与右边第一个元素进行比较
      if (temp[index] < temp[j]) {
        sorted[i] = temp[index++];
      } else {
        //如果左边第一个元素大于右边第一个元素，就把右边第一个元素存放到 temp 的第一个元素，j+1与左边第一个元素进行比较
        sorted[i] = temp[j++];
      }
      //一直这样比较，因为两边的长度不一样，最后有一边会多出来元素
      if (index <= divide) {
        for (k = 0; k <= divide - index; k++) {
          sorted[i + k + 1] = temp[index + k];
        }
      }

      if (j <= length) {
        for (k = 0; k <= length - j; k++) {
          sorted[i + k + 1] = temp[j + k];
        }
      }
    }
  }

  //用sortedArr来存放排好序的元素
  let sortedArr = [];
  //原始数组前追加一个0，这样就可以从1开始，比较方便计算
  arr.unshift(0);
  //对arr进行归并排序，排好存放到sortedArr
  mSort(arr, sortedArr, 1, arr.length - 1);
  //删除之前追加的第一个元素
  sortedArr.shift();

  console.log("排好序后的数组：");
  console.log(sortedArr);

  return sortedArr;
}
