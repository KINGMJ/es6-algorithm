export function shellSort(arr) {
  let temp, i, j;
  for (
    let increment = Number.parseInt(arr.length / 2);
    increment > 0;
    increment = Number.parseInt(increment / 2)
  ) {
    for (i = increment; i < arr.length; i++) {
      temp = arr[i];
      if (arr[i] < arr[i - increment]) {
        for (j = i - increment; j >= 0 && arr[j] > temp; j -= increment) {
          arr[j + increment] = arr[j];
        }
        arr[j + increment] = temp;
      }
    }
  }
  return arr;
}
