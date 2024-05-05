/**
 * Task description: Write a JavaScript program to find the most frequent item in an array.
 * Sample array: arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 * Expected Result: a ( 5 times )
 */
let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

let x = 0;
let y = 0;
let item;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) x++;
    if (y < x) {
      y = x;
      item = arr[i];
    }
  }
  x = 0;
}

console.log(item + " ( " + y + " times ) ");
