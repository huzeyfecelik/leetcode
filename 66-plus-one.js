/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  counter = 1;
  total = BigInt(0);
  new_digits = [];
  for (var i = digits.length - 1; i > -1; i--) {
    console.log("i is: " + i)
    console.log("digits[i] is: " + digits[i]);
    console.log("digits[i] * counter is: " + digits[i] * counter);
    total = BigInt(total) + BigInt(digits[i] * counter);
    console.log("total is: " + total);
    counter *= 10;
  }
  total += BigInt(1);
  console.log("total is: " + total);
  for (var i = 0; i < total.toString().length; i++) {
    new_digits.push(parseInt(total.toString()[i]));
  }
  return new_digits;
};

console.log(
  plusOne([
    7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4,
    7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 6,
  ])
);