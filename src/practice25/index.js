export function postorderTraversal(root) {
  let arr = [];
  traversal(root, arr);
  return arr;

  function traversal(root, arr) {
    if (root == null) {
      return;
    }
    traversal(root.left, arr);
    traversal(root.right, arr);
    arr.push(root.val);
  }
}
