# 二叉树的层序遍历 II

https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/

题解：

这道题与二叉树的层序遍历不一样的地方是输出的顺序不同，所以我们可以每次遍历到同一层的时候，将该层的列表插入到结果列表的头部即可。js 中可以用数组的 unshift 来实现
