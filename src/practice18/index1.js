export default function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const less = arr.filter((n) => n < pivot);
  const greater = arr.filter((n) => n > pivot);
  return quickSort(less).concat([pivot]).concat(quickSort(greater));
}
