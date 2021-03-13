export function inorderTraversal(root) {
  let arr = [];
  traversal(root, arr);
  return arr;

  function traversal(root, arr) {
    if (root == null) {
      return;
    }
    traversal(root.left, arr);
    arr.push(root.val);
    traversal(root.right, arr);
  }
}
