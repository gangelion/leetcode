function diameterOfBinaryTree(root) {
  if (!root) return null

  return diameterOfBinaryTree(root.left) + diameterOfBinaryTree(root.right)
}
