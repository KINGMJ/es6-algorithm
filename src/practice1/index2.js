export function twoSum(nums, target) {
  const map = new Map()
  let i = 0, complement
  for (i; i < nums.length; i++) {
    complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
}