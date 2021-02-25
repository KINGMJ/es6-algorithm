export function insertionSort(arr) {
  let temp, inner;
  for (let outer = 1; outer < arr.length; outer++) {
    temp = arr[outer];
    for (inner = outer - 1; inner >= 0 && arr[inner] > temp; inner--) {
      arr[inner + 1] = arr[inner];
    }
    arr[inner + 1] = temp;
  }
  return arr;
}
