/**
 * Task description: Write a JavaScript function to get the nth largest element from an unsorted array.
 * Expected Result: 89
 * @param {Array} arr - The unsorted array
 * @param {number} n - The position of the nth largest element
 * @returns {number} - The nth largest element
 */
function getLargest(arr, n) {
  arr.sort((a, b) => b - a);

  return arr[n - 1];
}

console.log(getLargest([43, 56, 23, 89, 88, 90, 99, 652], 4));
