/**
 * Task description: Write a JavaScript function to generate an array between two integers of 1 step length.
 * Expected results:[4, 5, 6, 7]
 *                  [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
 * @param {number} s - The starting integer
 * @param {number} l - The ending integer
 * @returns {Array} - The array containing numbers between two integers
 */
function rangeBetween(s, l) {
  let result = [];

  for (let i = s; i <= l; i++) {
    result.push(i);
  }

  return result;
}

console.log(rangeBetween(4, 7));
console.log(rangeBetween(-4, 7));
