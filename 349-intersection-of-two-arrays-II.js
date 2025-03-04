/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  lesser = [];
  greater = [];
  solution = [];
  if (nums1.length <= nums2.length) {
    lesser = nums1;
    greater = nums2;
  } else {
    lesser = nums2;
    greater = nums1;
  }

  for (var i = 0; i < lesser.length; i++) {
    if (greater.includes(lesser[i])) {
      solution.push(lesser[i]);
      greater.splice(
        greater.findIndex((item) => item === lesser[i]),
        1
      );
    }
  }
  return solution;
};
