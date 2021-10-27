export function findMiddleIndex(nums) {
  const sum = nums.reduce((acc, cur) => acc + cur)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    leftSum += i == 0 ? 0 : nums[i - 1]
    if (sum - leftSum - nums[i] == leftSum) {
      return i
    }
  }
  return -1
}
