export function levelOrder(root) {
  const res = [];
  const queue = []; //使用数组模拟一个队列
  queue.push(root);
  while (root && queue.length) {
    root = queue.shift();
    res.push(root.val);
    if (!!root.left) {
      queue.push(root.left);
    }
    if (!!root.right) {
      queue.push(root.right);
    }
  }
  return res;
}
