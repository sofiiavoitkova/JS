//Task1
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

alert(fruits.length); //4

//Task2
let styles = ["Джаз", "Блюз"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Классика";
//styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Рэп", "Регги");
console.log(styles);

//Task3
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

// arr[2]();
// a,b,function () {
//     alert(this);
//   };

//Task4
function sumInput() {
  let numbers = [];
  let num;

  do {
    num = prompt("Please enter the number: ", "");
    if (num === "" || num === null || !isFinite(num)) {
      break;
    }
    numbers.push(+num);
  } while (true);

  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  return sum;
}

console.log(sumInput());
