# 图的遍历算法：DFS 和 BFS

## DFS（深度优先遍历）

### 邻接矩阵，递归方式（index.js）

dfs 处理，把树当成特殊的图来看，就好理解了。树的前序遍历是先节点，再前序遍历左子树，右子树。见`practice26`

```javascript
res.push(root.val)
traversal(root.left)
traversal(root.right)
```

所以图就是先迭代每一个顶点，判断该顶点有没有被访问过。如果没有被访问过，就执行 dfs 算法。 dfs 内部逻辑如下：

```javascript
function dfs(g, i) {
  visited[i] = true
  // 打印顶点
  console.log(g.vexs[i])
  for (let j = 0; j < g.numVertexes; j++) {
    if (g.arc[i][j] == 1 && !visited[j]) {
      dfs(g, j)
    }
  }
}
```

先访问节点，然后遍历所有的顶点，如果 `g.arc[i][j] == 1` 表示跟当前的节点是有边，并且没有被访问过 `!visited[j]`，继续 dfs

### 邻接表，递归方式（index1.js）

## BFS（广度优先遍历）

###
