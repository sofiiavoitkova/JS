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
