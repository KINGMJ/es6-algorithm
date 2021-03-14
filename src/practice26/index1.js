export function preorderTraversal(root) {
  const res = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      res.push(root.val);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return res;
}
