/**
 * Task description: Write a JavaScript function to clone an array.
 * Expected Result: [1, 2, 4, 0]
                    [1, 2, [4, 0]]
 * @param {Array} arr - The array to clone
 * @returns {Array}
 */
function cloneArray(arr) {
  return arr.slice();
}

console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));
