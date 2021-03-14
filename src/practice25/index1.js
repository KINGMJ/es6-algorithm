export function postorderTraversal(root) {
  const res = [];
  const stack = []; //模拟一个栈
  let prev = null; //已访问过的结点
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.right == null || root.right == prev) {
      res.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }
  return res;
}
