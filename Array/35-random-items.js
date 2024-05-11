/**
 * Task description: Write a JavaScript function to get random items from an array
 * Expected Result: any random element from the array
 * @param {Array} arr - The input array
 * @param {number} n - The number of items to generate
 * @returns {number} - Random item from the array
 */

//the 1st solution (for generating 1 item)
function RandomItem(arr) {
  let i = Math.floor(Math.random() * arr.length);

  return arr[i];
}

let myArray = [43, 56, 23, 89, 88, 90, 99, 652];
console.log(RandomItem(myArray));

//the 2nd solution (for generating multiple items)
let arr = [43, 56, 23, 89, 88, 90, 99, 652];

function RandomItem(arr, n) {
  let randomItems = [];

  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * arr.length);
    randomItems.push(arr[index]);
  }

  return randomItems;
}

console.log(RandomItem(arr, 2));
