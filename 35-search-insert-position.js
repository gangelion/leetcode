function searchInsert(nums, target) {
  nums.push(target)
  nums.sort((a, b) => a - b)
  return nums.indexOf(target)
}

// function searchInsert(nums, target) {
//   if (nums[0] >= target) return 0
//   else if (nums[nums.length - 1] < target) return nums.length

//   for (let i = 0; i < nums.length; i++) {
//     if (target > nums[i] && target <= nums[i + 1]) return i + 1
//   }
// }
