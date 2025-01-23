/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  indices = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i; j < nums.length; j++)
      if (nums[i] + nums[j + 1] == target) {
        indices.push(i);
        indices.push(j + 1);
        return indices;
      }
  }
};
