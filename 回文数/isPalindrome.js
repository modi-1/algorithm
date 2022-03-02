/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 例如，121 是回文，而 123 不是。
 *
 * 示例 1：
 * 输入：x = 121
 * 输出：true
 *
 * 示例 2：
 * 输入：x = -121
 * 输出：false
 * 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 * 示例 3：
 * 输入：x = 10
 * 输出：false
 * 解释：从右向左读, 为 01 。因此它不是一个回文数。
 */

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0) return false;
  var flag = true,
    i = 0;
  x = x.toString();
  while (i < x.length / 2) {
    if (x[i] !== x[x.length-1-i]) {
      flag = false;
      break;
    }
    i++;
  }
  return flag
};

console.log("\x1b[36m", "输入:", "x = 121");
console.log("\x1b[37m", "输出:", isPalindrome(121));
console.log(
  "\x1b[32m",
  "预期结果:",
  "\x1b[33mtrue \x1b[37m"
);

console.log("\x1b[36m", "输入:", "x = -121");
console.log("\x1b[37m", "输出:", isPalindrome(-121));
console.log(
  "\x1b[32m",
  "预期结果:",
  "\x1b[33mfalse \x1b[37m"
);

console.log("\x1b[36m", "输入:", "x = 10");
console.log("\x1b[37m", "输出:", isPalindrome(10));
console.log(
  "\x1b[32m",
  "预期结果:",
  "\x1b[33mfalse \x1b[37m"
);