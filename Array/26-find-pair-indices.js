/**
 * Task description: Write a JavaScript program to find a pair of elements (indices of the two numbers)
 * in a given array whose sum equals a specific target number.
 * Expected Result: 2, 3
 */
let numbers = [10, 20, 10, 40, 50, 60, 70],
  target = 50;

for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] + numbers[i + 1] === target) {
    console.log(i, i + 1);
    break;
  }
}
