export function headSort(arr) {
  /**
   * 转化成大顶堆
   * @param {*} arr
   * @param {*} index 第几个结点，从1开始
   * @param {*} length 大顶堆结点个数
   */
  function headAjust(arr, index, count) {
    let temp, j;
    temp = arr[index - 1];
    for (j = 2 * index; j <= count; j *= 2) {
      //左孩子结点的值跟右孩子节点的值比较，取最大的结点
      if (j < count && arr[j - 1] < arr[j]) {
        ++j;
      }
      //如果结点比它的左右子节点大，退出循环
      if (temp >= arr[j - 1]) {
        break;
      }
      //交换结点
      arr[index - 1] = arr[j - 1];
      //该结点的子节点继续跟下一个子节点比较
      index = j;
    }
    arr[index - 1] = temp;
    return arr;
  }

  /**
   * 交换位置
   * @param {*} arr
   * @param {*} i
   * @param {*} j
   */
  function swap(arr, i, j) {
    let temp = arr[i - 1];
    arr[i - 1] = arr[j - 1];
    arr[j - 1] = temp;
    return arr;
  }

  let i = Number.parseInt(arr.length / 2);
  for (i; i > 0; i--) {
    headAjust(arr, i, arr.length);
  }
  for (let j = arr.length; j > 1; j--) {
    swap(arr, 1, j);
    headAjust(arr, 1, j - 1);
  }
  return arr;
}
