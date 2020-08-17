export default function selectionSort(arr) {
  let minIndex; //最小元素的索引
  let temp;     //用于交换元素的临时变量
  //外层遍历，只需遍历到倒数第二个元素
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    //内层遍历，从i+1到最后一个元素
    for (let j = i + 1; j < arr.length; j++) {
      //找出最小的值
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    //交换值
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}