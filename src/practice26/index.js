export function preorderTraversal(root) {
  let arr = [];
  traversal(root, arr);
  return arr;

  function traversal(root, arr) {
    if (root == null) {
      return;
    }
    arr.push(root.val);
    traversal(root.left, arr);
    traversal(root.right, arr);
  }
}
