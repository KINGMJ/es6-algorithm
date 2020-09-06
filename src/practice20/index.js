/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
export function kthGrammar(N, K) {
  return getLineNumber(N)[K - 1]
};

//递归获取每一行的字符
function getLineNumber(n) {
  if (n == 1) {
    return [0]
  }
  const res = getLineNumber(n - 1)
  let arr = []
  for (let i of res) {
    if (i == 0) {
      arr = arr.concat([0, 1])
    } else if (i == 1) {
      arr = arr.concat([1, 0])
    }
  }
  return arr
}