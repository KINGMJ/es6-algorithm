export function levelOrderBottom(root) {
  const res = [];
  const queue = []; //使用数组模拟一个队列
  queue.push(root);

  while (root && queue.length) {
    let tempArr = [];
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      root = queue.shift();
      tempArr.push(root.val);
      if (!!root.left) {
        queue.push(root.left);
      }
      if (!!root.right) {
        queue.push(root.right);
      }
    }
    res.unshift(tempArr);
  }
  return res;
}
