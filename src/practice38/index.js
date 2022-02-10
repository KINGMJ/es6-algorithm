/**
 * @param {string} s
 * @return {boolean}
 */
export function isValid(s) {
  // 判断s的长度是否是偶数
  if (s.length & 1) {
    return false
  }
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ])
  // 使用栈来处理，如果是左括号存入栈中；右括号需要判断是否与栈顶元素匹配，如果匹配，出栈，继续匹配下一个
  const stack = []
  for (let ch of s) {
    if (map.has(ch)) {
      if (!stack.length || stack[stack.length - 1] !== map.get(ch)) {
        return false
      }
      stack.pop()
    } else {
      stack.push(ch)
    }
  }
  return true
}
