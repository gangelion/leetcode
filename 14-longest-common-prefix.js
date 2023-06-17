// Failed

function longestCommonPrefix(strs) {
  if (strs.length === 0) return ''

  let array = []
  let index = -1
  for (const str of strs) {
    if (array.length === 0) {
      array = strs[0].split('')
      continue
    }

    for (const [i, val] of array.entries()) {
      if (val === str[i]) index = i
      else break
    }
  }
  if (index === -1) {
    if (strs.length === 1) return strs[0]
  }
  return strs[0]
    .split('')
    .slice(0, index + 1)
    .join('')
}
