function lengthOfLastWord(s) {
  const words = s.split(' ').filter((v) => v)
  return words[words.length - 1].length
}
