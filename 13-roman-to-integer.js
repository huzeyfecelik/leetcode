/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  memory = "";
  trying = "";
  final = 0;

  const pairs = new Map([
    ["I", 1],
    ["II", 2],
    ["III", 3],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ]);

  for (var i = s.length - 1; i > -1; i--) {
    trying = s[i] + trying;
    if (pairs.has(trying)) {
      memory = trying;
      if (i == 0) {
        final += pairs.get(memory);
      }
    } else {
      final += pairs.get(memory);
      trying = s[i];
      memory = trying;
      if (i == 0) {
        final += pairs.get(memory);
      }
    }
  }
  return final;
};
