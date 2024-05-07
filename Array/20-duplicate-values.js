/**
 * Task description: Write a JavaScript program to find duplicate values in a JavaScript array.
 * Expected Result: [1, 0, 2, 4, 7]
 * @param {Array} arr - The input array
 * @returns {Array} - An array containing the duplicate values
 */

let arr = [1, 0, 2, 3, 4, 5, 7, 8, 9, 1, 2, 0, 4, 7, 1];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
  let x = 0;
  if (!duplicates.includes(arr[i])) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) x++;
    }
    if (x >= 2) {
      duplicates.push(arr[i]);
    }
  }
}

console.log(duplicates);
