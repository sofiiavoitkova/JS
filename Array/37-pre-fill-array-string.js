/**
 * Task description: Write a JavaScript function to create a specified number of elements with a pre-filled string value array.
 * Expected results: ["default value", "default value", "default value"]
 *                   ["password", "password", "password", "password"]
 * @param {number} l - The length of the array to be created
 * @param {number} n - The value to pre-fill the array with
 * @returns {Array} - The array filled with the specified string value
 */
function array_filled(l, w) {
  let arr = [];

  for (let i = 0; i < l; i++) {
    arr.push(w);
  }

  return arr;
}

console.log(array_filled(3, "default value"));
console.log(array_filled(4, "password"));
