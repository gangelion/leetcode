// should pass but failed
function removeDuplicates(nums) {
  const uniqs = []
  nums.forEach((num) => {
    if (!uniqs.includes(num)) {
      uniqs.push(num)
    }
  })

  return uniqs.length
}
