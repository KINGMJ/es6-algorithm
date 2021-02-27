class TreeNode {
  constructor(data) {
    this.data = data; //数据域
    this.lchild = null; //左孩子
    this.rchild = null; //右孩子
  }
}

export default class BinaryTree {
  constructor() {
    this.head = new TreeNode(null);
  }
}
