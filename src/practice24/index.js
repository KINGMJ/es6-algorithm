export function isBalanced(root) {
  if (root == null) {
    return true;
  } else {
    let leftDeep = 0,
      rightDeep = 0;
    if (root.left) {
      leftDeep = levelOrderTraverse([root.left], 0);
    }
    if (root.right) {
      rightDeep = levelOrderTraverse([root.right], 0);
    }
    //二叉树每个结点的左右两个子树的高度差的绝对值不超过1
    return (
      Math.abs(leftDeep - rightDeep) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    );
  }

  /**
   * 层序遍历求二叉树的高度
   * @param {*} nodes
   * @param {*} deep
   * @returns
   */
  function levelOrderTraverse(nodes, deep) {
    if (nodes.length == 0) {
      return deep;
    }
    deep++;
    let temp = [];
    for (let item of nodes) {
      if (item.left != null) {
        temp.push(item.left);
      }
      if (item.right != null) {
        temp.push(item.right);
      }
    }
    return levelOrderTraverse(temp, deep);
  }
}
