function isPalindrome(x) {
  return String(x) === String(x).split('').reverse().join('')
}
