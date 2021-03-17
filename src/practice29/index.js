export function levelOrder(root) {
  let arr = [];
  if (root == null) {
    return [];
  }
  traversal([root], arr);
  return arr;

  function traversal(nodes, arr) {
    if (nodes.length == 0) {
      return;
    }
    let temp = [];
    for (let node of nodes) {
      arr.push(node.val);
      if (!!node.left) {
        temp.push(node.left);
      }
      if (!!node.right) {
        temp.push(node.right);
      }
    }
    traversal(temp, arr);
  }
}
