export function preorderTraversal(root) {
  const res = []
  traversal(root)
  return res
  function traversal(root) {
    if (root == null) {
      return
    }
    res.push(root.val)
    traversal(root.left)
    traversal(root.right)
  }
}
