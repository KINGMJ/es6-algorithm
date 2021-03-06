export function isBalanced(root) {
  if (root == null) {
    return true;
  }
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );

  /**
   * 求二叉树的高度
   * @param {*} nodes
   * @returns
   */
  function height(root) {
    if (root == null) {
      return 0;
    }
    return Math.max(height(root.left), height(root.right)) + 1;
  }
}
