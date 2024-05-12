/**
 * Task description: Write a JavaScript function to create a specified number of elements with a pre-filled
 * numeric value array.
 * Expected results: [0, 0, 0, 0, 0, 0]
 *                   [11, 11, 11, 11]
 * @param {number} l - The length of the array to be created
 * @param {number} n - The value to pre-fill the array with
 * @returns {Array} - The array filled with the specified value
 */
function array_filled(l, n) {
  let arr = [];

  for (let i = 0; i < l; i++) {
    arr.push(n);
  }

  return arr;
}

console.log(array_filled(6, 0));
console.log(array_filled(4, 11));
