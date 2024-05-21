/**
 * Task description: Write a JavaScript program that accepts a number as input and inserts dashes (-) between
 * each even number.
 * Sample number: 025468
 * Expected Result: 0-254-6-8
 */
let userInput = prompt("Please enter a number: ");

let num = parseInt(userInput);

if (!isFinite(num)) {
  console.log("Please enter a valid number.");
} else {
  let input = userInput.toString();
  let result = "";

  for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) % 2 === 0 && Number(input[i + 1]) % 2 === 0) {
      result += input[i] + "-";
    } else {
      result += input[i];
    }
  }

  console.log(result);
}
