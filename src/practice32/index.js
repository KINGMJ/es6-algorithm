/**
 *
 * @param {*} intervals
 */
export function merge(intervals) {
  // 首先按 left 的值进行从小到大排序
  intervals.sort((a, b) => a[0] - b[0])
  // 利用 reduce 函数进行合并操作
  const mergedArr = intervals.reduce((prev, cur, index) => {
    // 从 prev 中取出最后一项
    const last = prev[prev.length - 1]
    // 核心逻辑，last[1] >= cur[0] 就进行合并；否则直接将当前项 push 到 prev 中
    if (last && last[1] >= cur[0]) {
      //left取最小值：因为已经排过序，所以 last[0] 比较小
      let left = last[0]
      // right取最大值
      let right = last[1] > cur[1] ? last[1] : cur[1]
      prev[prev.length - 1] = [left, right]
    } else {
      prev.push(cur)
    }
    return prev
  }, [])
  return mergedArr
}
