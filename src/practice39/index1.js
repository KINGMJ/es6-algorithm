/**
 * @param {number[]} nums
 * @return {number[]}
 */
export function productExceptSelf(nums) {
  // 使用一个 answer 数组来存放 L 的乘积
  const answer = []

  // 计算左侧乘积
  answer[0] = 1
  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }
  // 使用 一个 r 来代表 R 的乘积
  let r = 1
  // 计算右侧乘积的时候，可以直接计算出最终结果，这里的 answer 就是最终结果了
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = parseInt(answer[i] * r)
    r = r * nums[i]
  }
  return answer
}
