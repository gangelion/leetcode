function lengthOfLastWord(s) {
  let count = 0
  let flag = false
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      flag = true
      count++
    }
    else if (flag) return count
  }
  return count
};
