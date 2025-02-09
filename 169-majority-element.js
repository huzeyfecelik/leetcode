/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  counter = 0;
  greatest_amount = 0;
  greatest_number = 0;
  nums.sort();
  for (var i = 0; i < nums.length; i++) {
    if (i == 0 && i == nums.length - 1) {
      greatest_amount = counter;
      greatest_number = nums[i];
    } else if (i == 0) {
      counter += 1;
    } else {
      if (nums[i] == nums[i - 1]) {
        counter += 1;
        if (counter > greatest_amount) {
          greatest_amount = counter;
          greatest_number = nums[i];
        }
      } else {
        if (counter > greatest_amount) {
          greatest_amount = counter;
          greatest_number = nums[i];
        }
        counter = 1;
      }
    }
  }
  return greatest_number;
};
