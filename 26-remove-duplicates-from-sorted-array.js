/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  duplicates = [];

  for (var i = 0; i < nums.length; i++) {
    if (
      duplicates.length === 0 ||
      nums[i] !== duplicates[duplicates.length - 1]
    ) {
      duplicates.push(nums[i]);
    }
  }

  nums.length = 0;

  for (var i = 0; i < duplicates.length; i++) {
    nums.push(duplicates[i]);
  }

  return duplicates.length;
};
