/**
 * Task description: Write a JavaScript script to empty an array while keeping the original.
 * Expected Result: empty array
 */
let arr = [2, 5, 9, 6];

let arrCopy = arr.slice();

arrCopy.length = 0;
//arrCopy.splice(0, arrCopy.length);

console.log(arrCopy);
console.log(arr);
