/**
 * Task description: Write a JavaScript program to display the colors in the following way :
 * Sample arrays: color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
_* o = ["th","st","nd","rd"];
 * Expected Result: "1st choice is Blue ."
                    "2nd choice is Green."
                    "3rd choice is Red."
                    - - - - - - - - - - - - -
 */
const color = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];

const o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
  let position;
  if (i + 1 === 1) {
    position = i + 1 + o[1];
  } else if (i + 1 === 2) {
    position = i + 1 + o[2];
  } else if (i + 1 === 3) {
    position = i + 1 + o[3];
  } else {
    position = i + 1 + o[0];
  }

  console.log(position + " choice is " + color[i] + ".");
}
