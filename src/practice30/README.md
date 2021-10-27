# 找到数组的中间位置
https://leetcode-cn.com/problems/find-the-middle-index-in-array/

## 题解

这道题是一道数学题。首先算出数组元素的总和 `sum`。
然后循环数组，计算 `index` 左边元素之和 `leftSum`，如果 `sum - leftSum - nums[i] == leftSum`，返回 i 就可以了。