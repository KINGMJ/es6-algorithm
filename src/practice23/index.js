export function inorderTraversal(root) {
  function traversal(root) {
    if (!!root.left) {
      traversal(root.left);
    }
    arr.push(root.val);
    if (!!root.right) {
      traversal(root.right);
    }
  }
  let arr = [];
  if (root == null) {
    return [];
  }
  traversal(root);
  return arr;
}
