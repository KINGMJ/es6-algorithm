export function isBalanced(root) {
  return height(root) >= 0;
  /**
   * 自底向上求高度，-1代表已经不平衡了。只要任意结点不平衡，就不是平衡二叉树了。
   * @param {*} nodes
   * @returns
   */
  function height(root) {
    if (root == null) {
      return 0;
    }
    const leftHeight = height(root.left);
    if (leftHeight == -1) {
      return -1;
    }
    const rightHeight = height(root.right);
    if (rightHeight == -1) {
      return -1;
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
