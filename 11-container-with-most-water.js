/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  value = 0;
  left = 0;
  right = height.length - 1;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] * (right - left) > value) {
        value = height[left] * (right - left);
      }
      left++;
    } else if (height[left] > height[right]) {
      if (height[right] * (right - left) > value) {
        value = height[right] * (right - left);
      }
      right--;
    } else {
      if (height[left] * (right - left) > value) {
        value = height[left] * (right - left);
      }
      left++;
    }
  }

  return value;
};
