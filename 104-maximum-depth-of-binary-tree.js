function maxDepth(root) {
  if (!root) return null

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
