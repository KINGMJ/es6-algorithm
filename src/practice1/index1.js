export function twoSum(nums, target) {
  //将数组转换成map
  const map = new Map(nums.map((value, key) => [value, key]))
  let i = 0, complement;
  for (i; i < nums.length; i++) {
    complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)]
    }
  }
}