/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    memory = "";
    for (var i = 0; i < s.length; i++) {
      if (s[i] != " ") {
        if (s[n - 1] == " ") {
          memory = s[n];
        } else {
          memory += s[n];
        }
      }
    }
    return memory.length;
};
