/**
 * Task description: Write a JavaScript program to compute the sum and product of an array of integers.
 * Sample array: arr = [-1, -2, -3, -4, 1, 2, 3, 4];
 * Expected Result: 0
 *                  576
 */
let arr = [-1, -2, -3, -4, 1, 2, 3, 4];

let sum = 0;
let product = 1;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  product *= arr[i];
}

console.log(sum);
console.log(product);
