# 除自身以外数组的乘积

https://leetcode-cn.com/problems/product-of-array-except-self/

## 题解 1：左右乘积列表

对于 i，它的左乘积列表 left 规律如下：

- 如果 i == 0，left[0] = 1
- 如果 i 不等于 0，left[i] = left[i-1] \* nums[i-1]

它的右乘积列表 right 规律如下：

- 如果 i 等于 nums.length - 1 right[nums.length-1] == 1
- 如果 i 不等于 nums.lenght - 1，right[i] = right[i+1] \* nums[i+1]


最后的结果就是 left[i] * right[i]


时间和空间复杂度都是：O(n)



## 题解2：优化空间复杂度为常数

只用一个数组两次循环解决。第一次循环构建一个 answer 数组存放 left 乘积；

第二次使用一个 R 来表示右侧所有乘积，初始值为 1。从后往前遍历：

```
answer[i] = answer[i] * R;
// R 需要包含右边所有的乘积，所以计算下一个结果时需要将当前值乘到 R 上
R *= nums[i];
```



