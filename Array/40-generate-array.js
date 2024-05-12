/**
 * Task description: Write a JavaScript function to generate an array of integer numbers,
 * increasing one from the starting position, of a specified length.
 * Expected results:[1, 2, 3, 4]
 *                  [-6, -5, -4, -3]
 * @param {number} s - The starting position for the array
 * @param {number} l - The length of the array to generate
 * @returns {Array} - The array of integer numbers
 */
function array_range(s, l) {
  let result = [];

  for (let i = 0; i < l; i++) {
    result.push(s + i);
  }

  return result;
}

console.log(array_range(1, 4));
console.log(array_range(-6, 4));
