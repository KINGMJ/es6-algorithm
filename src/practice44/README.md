## 划分为 k 个相等的子集

https://leetcode-cn.com/problems/partition-to-k-equal-sum-subsets/

https://zhuanlan.zhihu.com/p/57471986

面试变种：

题目：
现在需要将总数和各自重量都已知的兔子放进 n 个笼子中，将所有兔子全部放进去后，最终每个笼子的重量需要相同请实现一个函数，输入 包含了所有兔子重量的数组 和 笼子的数量，输出 最终每个笼子的重量是否能够相同提示：兔子重量为正整数，且不许杀兔子

数组长度不超过 15 测试用例 1：

输入：[2, 2, 3, 3, 5], 3 输出：true 解释：5 只兔子按以下方式放入 3 个笼子后，笼子重量相同：[2, 3]、[2, 3]、[5]

测试用例 2：输入：[3, 5, 5, 6, 7], 4 输出：false 解释：5 只兔子无论怎样分配到 4 个笼子中，笼子重量都无法相同
