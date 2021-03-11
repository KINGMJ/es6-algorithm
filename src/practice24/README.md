# 平衡二叉树

https://leetcode-cn.com/problems/balanced-binary-tree/

这道题本质上是求二叉树的深度，`index`使用层序遍历，自顶向下的递归

`index1`优化了一下求二叉树高度的递归方式，但它们的复杂度都是 O(n²)

`index2`使用自底向上的递归方式，类似二叉树的后序遍历，复杂度为 O(n)
