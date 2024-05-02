/**
 * Task description: Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will
return the last 'n' elements of the array.
 * Expected Result: -2
                    [9, 0, -2]
                    [7, 9, 0, -2]
 * @param {Array} arr - The input array
 * @param {number} n - The number of elements to return
 * @returns {Array} The last 'n' elements of the array
 */
function last(arr, n) {
  if (n === undefined) {
    return arr.slice(-1)[0];
  }

  if (n < 0) {
    return [];
  }

  return arr.slice(-n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
