class TreeNode {
  constructor(data) {
    this.data = data; //数据域
    this.lchild = null; //左孩子
    this.rchild = null; //右孩子
  }
}

export default class BinaryTree {
  constructor() {}

  //对于严格的数组表示法转换
  arrayToTree(arr) {
    return createTreeNode(arr, 0);
  }

  //对于省略的数组表示法转换
  arrayToTree1(arr) {
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
          node.lchild = new TreeNode(arr[i]);
          //把 lchild 节点插入队列
          queue.push(node.lchild);
        }
        // lchild 完毕，开始处理 rchild
        isLChild = false;
      } else {
        if (arr[i] != null) {
          node.rchild = new TreeNode(arr[i]);
          //把 rchild 节点插入队列
          queue.push(node.rchild);
        }
        //rchild处理完毕，开始出队列
        queue.shift();
        isLChild = true;
      }
    }
    return root;
  }
}

/**
创建树的结点：根据二叉树的性质递归来创建
第 index 个结点的左子节点的位置 = index *2
第 index 个结点的右子节点的位置 = index *2 +1
我们使用数组的下标来表示位置，从0开始，就得到： index *2 +1 ; index *2 +2
 */
function createTreeNode(arr, index) {
  if (index > arr.length) {
    return null;
  }
  if (arr[index] == null) {
    return null;
  }
  const node = new TreeNode(arr[index]);
  node.lchild = createTreeNode(arr, index * 2 + 1);
  node.rchild = createTreeNode(arr, index * 2 + 2);
  return node;
}
