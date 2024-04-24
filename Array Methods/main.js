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

//Task5
function copySorted(arr) {
  let sortedCopy = arr.slice();

  sortedCopy.sort();

  return sortedCopy;
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert(sorted);
alert(arr);

//Task7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((user) => user.name);

console.log(names); // Вася, Петя, Маша

//Task8
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((user) => ({
  id: user.id,
  fullName: `${user.name} ${user.surname}`,
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

//Task9
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

//Task10
//the 1st way
function shuffle(array) {
  array.sort(function () {
    return Math.random() - 0.5;
  });
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);

//the 2nd way
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

//the 3rd way (Fisher–Yates shuffle)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
}

//Task11
//the 1st way
function getAverageAge(users) {
  let totalAge = 0;

  for (let i = 0; i < users.length; i++) {
    totalAge += users[i].age;
  }

  let averageAge = totalAge / users.length;

  return averageAge;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

alert(getAverageAge(arr));

//the 2nd way
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

//Task12
function unique(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (!result.includes(current)) {
      result.push(current);
    }
  }

  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));

//Task13
function groupById(arr) {
  return arr.reduce(function (result, user) {
    result[user.id] = user;
    return result;
  }, {});
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById);
