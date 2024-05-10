/**
 * Task description: Write a JavaScript script to empty an array while keeping the original.
 * Expected Result: empty array
 * @param {Array} arr - The input array
 * @param {number} n - The element to search for
 * @returns {boolean} - True if the element is found, otherwise false
 */
arr = [2, 5, 9, 6];

arrCopy = arr.slice();

arrCopy.length = 0;

console.log(arrCopy);
console.log(arr);
