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
    let tempNodes = [];
    let tempArr = [];
    for (let node of nodes) {
      tempArr.push(node.val);
      if (!!node.left) {
        tempNodes.push(node.left);
      }
      if (!!node.right) {
        tempNodes.push(node.right);
      }
    }
    arr.push(tempArr);
    traversal(tempNodes, arr);
  }
}
