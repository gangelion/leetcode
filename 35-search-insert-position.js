// function searchInsert(nums, target) {
//   nums.push(target)
//   nums.sort((a, b) => a - b)
//   return nums.indexOf(target)
// }

// function searchInsert(nums, target) {
//   if (nums[0] >= target) return 0
//   else if (nums[nums.length - 1] < target) return nums.length

//   for (let i = 0; i < nums.length; i++) {
//     if (target > nums[i] && target <= nums[i + 1]) return i + 1
//   }
// }

function searchInsert(nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (target === nums[m]) return m
    else if (target > nums[m]) l = m + 1
    else r = m - 1
  }

  return l
}
