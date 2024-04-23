//Task1
//the 1st way
function camelize(str) {
  let words = str.split("-");
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i] !== "") {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
    return result;
  }

  console.log(camelize("background-color")); // 'backgroundColor'
  console.log(camelize("list-style-image")); // 'listStyleImage'
  console.log(camelize("-webkit-transition")); // 'WebkitTransition'
}

//the 2nd way
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

//Task2
//the 1st way
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered);

alert(arr);

//the 2nd way
function filterRange(arr, a, b) {
  let filteredArry = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filteredArry.push(arr[i]);
    }
  }

  return filteredArry;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [3, 1]

console.log(arr); // [5, 3, 8, 1]

//Task3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert(arr); // [3, 1]

//Task4
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);
