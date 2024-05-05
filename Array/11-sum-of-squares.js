/**
 * Task description: Write a JavaScript program to find the sum of squares of a numerical vector
 * Sample array: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * Expected Result: 385
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i] * arr[i];
}

console.log(sum);
