# 二叉树的层序遍历

https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

题解：

层序遍历可以用 BFS（广度优先搜索）来解决，这道题与传统的广度优先搜索不一样的地方是需要区分是哪一层。
我们可以改一下广度优先的代码，在每一层遍历开始之前，先记录一下队列中的结点数量 n，然后一口气处理完这一层的 n 个结点。（index1.js）

可以优化一下空间，不使用 tempArr，直接用一个数组搞定。（index2.js）

递归解法可以转换成森林的层序遍历，这样就可以保证递归数据类型的一致性。（index.js）

https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/
