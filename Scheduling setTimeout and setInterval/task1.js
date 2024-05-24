/**
 * Task description: Write a function printNumbers(from, to) that outputs a number every second,
 * starting from from and ending with to.
 * @param {number} from - The starting number of the sequence
 * @param {number} to - The ending number of the sequence
 */

//the 1st solution
function printNumbers(from, to) {
  let currentNum = from;

  let timerId = setInterval(function () {
    console.log(currentNum);

    if (currentNum == to) {
      clearInterval(timerId);
    }

    currentNum++;
  }, 1000);
}

printNumbers(1, 10);

//the 2nd solution
function printNumbers(from, to) {
  let currentNum = from;

  setTimeout(function go() {
    console.log(currentNum);

    if (currentNum < to) {
      setTimeout(go, 1000);
    }

    currentNum++;
  }, 1000);
}

printNumbers(1, 10);
