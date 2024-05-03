/**
 * Task description: Write a JavaScript program to sort the items of an array.
 * Sample array : arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 * Expected Result: -4,-3,1,2,3,5,6,7,8
 * @param {number} a - The first number to be compared.
 * @param {number} b - The second number to be compared.
 * @returns {number} - A negative value if 'a' is less than 'b', zero if 'a' equals 'b', a positive value if 'a' is greater than 'b'.
 */
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arr1.sort((a, b) => a - b);

console.log(arr1);
