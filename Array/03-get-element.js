/**
 * Task description: Write a JavaScript function to get the first element of an array. 
 * Passing the parameter 'n' will return the first 'n' elements of the array.
 * Expected Result: 7
                    []
                    [7, 9, 0]
                    [7, 9, 0, -2]
                    []
 * @param {Array} arr - The input array
 * @param {number} n - The number of elements to return
 * @returns {Array} The first 'n' elements of the array
 */
function first(arr, n) {
  if (n < 0) {
    return [];
  }

  if (n === undefined) {
    n = 1;
  }

  return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
