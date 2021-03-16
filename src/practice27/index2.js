export function levelOrder(root) {
  const res = [];
  const queue = []; //使用数组模拟一个队列
  queue.push(root);

  while (root && queue.length) {
    res.push([]);
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      root = queue.shift();
      res[res.length - 1].push(root.val);
      if (!!root.left) {
        queue.push(root.left);
      }
      if (!!root.right) {
        queue.push(root.right);
      }
    }
  }
  return res;
}