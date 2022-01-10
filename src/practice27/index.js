export function levelOrder(root) {
  //边界处理
  if (root == null) {
    return []
  }
  let arr = []
  //将根节点转换成森林，也就是[root]，对它进行递归
  traversal([root], arr)
  return arr

  function traversal(nodes, arr) {
    //递归基线条件
    if (nodes.length == 0) {
      return
    }
    let tempNodes = [] //用来存放子节点
    let tempArr = [] //临时的数组， 用来存放每一层的遍历结果
    for (let node of nodes) {
      //将子节点push到tempNodes数组中，对他们进行递归调用
      if (!!node.left) {
        tempNodes.push(node.left)
      }
      if (!!node.right) {
        tempNodes.push(node.right)
      }
      tempArr.push(node.val)
    }
    //每一层的递归结果 push 到 arr 中
    arr.push(tempArr)
    traversal(tempNodes, arr)
  }
}
