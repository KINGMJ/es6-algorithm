export class TreeNode {
  constructor(val) {
    this.val = val === undefined ? 0 : val;
    this.left = this.left === undefined ? null : this.left;
    this.right = this.right === undefined ? null : this.right;
  }
}

export function arrayToTree(arr) {
  if (arr.length == 0) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  //是否是左孩子节点
  let isLChild = true;
  //用数组的push和shift模拟队列
  const queue = [];
  queue.push(root);

  //从第二个节点开始遍历
  for (let i = 1; i < arr.length; i++) {
    //从队列中取出第一个元素
    const node = queue[0];
    if (isLChild) {
      if (arr[i] != null) {
        node.left = new TreeNode(arr[i]);
        //把 lchild 节点插入队列
        queue.push(node.left);
      }
      // lchild 完毕，开始处理 rchild
      isLChild = false;
    } else {
      if (arr[i] != null) {
        node.right = new TreeNode(arr[i]);
        //把 rchild 节点插入队列
        queue.push(node.right);
      }
      //rchild处理完毕，开始出队列
      queue.shift();
      isLChild = true;
    }
  }
  return root;
}
