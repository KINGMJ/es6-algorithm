export function preorderTraversal(root) {
  if (root == null) {
    return []
  }
  const res = []
  //模拟一个栈
  const stack = []
  stack.push(root)

  while (stack.length) {
    while (root) {
      //进栈的同时保存遍历的结果
      stack.push(root)
      res.push(root.val)
      root = root.left
    }
    //如果没有左节点了，出栈，处理右节点
    root = stack.pop()
    root = root.right
  }
  return res
}
