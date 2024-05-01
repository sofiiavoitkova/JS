/**
 * Task description: Write a JavaScript function to clone an array.
 * Expected Result: [1, 2, 4, 0]
                    [1, 2, [4, 0]]
 * @param {Array} arr - The array to clone
 * @returns {Array}
 */
function array_Clone(arr) {
  return arr.slice();
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
