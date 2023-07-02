function addBinary(a, b) {
  let aLen = a.length
  let bLen = b.length
  let results = []
  let increase = false

  while (aLen >= 0 && bLen >= 0) {
    const result = Number(a[aLen - 1]) + Number(b[bLen - 1])
    if (increase) result + 1

    if (result === 2) {
      results.unshift('0')
      increase = true
    } else if (result === 1) {
      results.unshift('1')
      increase = false
    } else if (result === 0) {
      results.unshift('0')
      increase = false
    }
    aLen--
    bLen--
  }

  if (increase) {
    results.unshift('1')
  }
  return results.join('')
}
