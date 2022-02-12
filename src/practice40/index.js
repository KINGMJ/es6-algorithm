/**
 * @param {number[]} g // 胃口值
 * @param {number[]} s // 饼干大小
 * @return {number}
 */
export function findContentChildren(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  // child 和 cookie 双指针，如果饼干满足小孩，指针全部右移；cookie 不管能不能满足都要又移
  let child = 0, // 能吃饱的孩子数量
    cookie = 0 // 饼干的个数

  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie++]) {
      child++
    }
  }
  return child
}
