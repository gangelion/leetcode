// Better use indexOf instead
function strStr(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let hI = 0
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + hI] !== needle[j]) {
        break
      }
      if (hI === needle.length - 1) return i
      hI++
    }
  }
  return -1
}
