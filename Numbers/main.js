//Task1
let x = +prompt("Enter the first number", "0");
let y = +prompt("Enter the second number", "0");
let z = x + y;

alert(z);

//Task3
function readNumber() {
  let numInput;

  do {
    numInput = +prompt("Enter the number", "0");

    if (numInput === null || numInput === "") {
      return null;
    }
  } while (!isFinite(numInput));

  return numInput;
}

console.log(`You wrote: ${readNumber()}`);
