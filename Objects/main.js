//Task1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Task2
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let emptyObject = {};
let nonEmptyObject = {
  name: "John",
  surname: "Smith",
};

console.log(isEmpty(emptyObject));
console.log(isEmpty(nonEmptyObject));

//Task4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);
