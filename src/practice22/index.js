export function findTilt(root) {
  let tilt = 0;
  nodeSum(root);

  function nodeSum(node) {
    if (node == null) {
      return 0;
    }
    const leftSum = nodeSum(node.left);
    const rightSum = nodeSum(node.right);
    tilt += Math.abs(leftSum - rightSum);
    return leftSum + rightSum + node.val;
  }

  return tilt;
}
