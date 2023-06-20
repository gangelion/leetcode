function romanToInt(s) {
  const array = s.split('')
  const mappings = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
  const shouldSubtracts = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
  let left = 0 // left index
  let right = 1 // right index
  let result = 0

  while (array[left]) {
    const value = array[left] + array[right]
    if (left === array.length - 1) {
      result += mappings[array[left]]
      left++
    }
    else if (shouldSubtracts.includes(value)) {
      result += mappings[array[right]] - mappings[array[left]]
      left += 2
      right += 2
    } else if (['I', 'X', 'C'].includes(array[right])) {
      result += mappings[array[left]]
      left++
      right++
    }
    else {
      result += mappings[array[right]] + mappings[array[left]]
      left += 2
      right += 2
    }
  }

  return result
}
