/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort();
  for (var n = 0; n < nums.length; n++) {
    if (n == nums.length - 1) {
      return false;
    } else if (nums[n] == nums[n + 1]) {
      return true;
    }
  }
};
