//Task1
let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

//Task2
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  if (Object.keys(salaries).length === 0) {
    return null;
  }

  let maxSalary = 0;
  let topName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topName = name;
    }
  }

  return topName;
}

console.log(topSalary(salaries));
