/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] == target) {
      return mid;
    } else {
      right = mid - 1;
    }
  }
  nums.push(target);
  nums.sort(function (a, b) {
    return a - b;
  });
  return searchInsert(nums, target);
};
