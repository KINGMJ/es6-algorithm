/**
 * @param {number[]} nums
 * @return {number[]}
 */
export function productExceptSelf(nums) {
  const left = [],
    right = []

  left[0] = 1
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }

  right[nums.length - 1] = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = parseInt(left[i] * right[i])
  }
  return nums
}
