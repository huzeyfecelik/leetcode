/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  number = "";
  new_digits = [];
  for (var i = 0; i < digits.length; i++) {
    number += digits[i].toString();
  }
  new_number = (BigInt(number) + BigInt(1)).toString();
  for (var i = 0; i < new_number.length; i++) {
    new_digits.push(parseInt(new_number[i]));
  }
  return new_digits;
};
