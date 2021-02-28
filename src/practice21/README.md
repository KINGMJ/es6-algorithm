# 二叉树的顺序存储结构和链式存储结构

## 顺序存储结构

二叉树由于它严格的定义，可以直接用数组来表示。对于不存在的结点，在数组中可以用 null 来表示。

## 链式存储结构

二叉树的链表表示法也称为二叉链表。二叉链表有一个数据域 data 和两个指针域 lchild 和 rchild

## 顺序存储结构转链式存储结构

1. 对于定义严格的数组表示，可以利用二叉树的性质来转换

第 index 个结点的左子节点的位置 = index *2
第 index 个结点的右子节点的位置 = index *2 + 1

比如：[2,null,4,null,null,9,8,null,null,null,null,null,null,4]

2. 对于定义不太严格的数组表示，比如 leetcode 里的，会把数组优化，这时候可以使用队列来实现

比如：上面的数组优化后得到 [2,null,4,9,8,null,null,4] ，它会把 null 节点下的左右孩子节点都省略掉


> 参考：
1. https://leetcode-cn.com/circle/article/htJ97s/