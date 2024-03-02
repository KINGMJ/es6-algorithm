export function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

export function shellSort2(arr) {
  const len = arr.length;
  let gap = 1;
  while (gap < len / 3) {
    gap = gap * 3 + 1; // 使用 Knuth 序列生成增量序列
  }
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 3); // 逆序减小增量序列
  }
  return arr;
}