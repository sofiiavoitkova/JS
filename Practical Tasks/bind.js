//Task: Write a function that uses this and create a copy of it with a bound context.

function greet() {
  console.log(`Hey ${this.name}`);
}

const user = {
  name: "Will"
};

const greetCopy = greet.bind(user);

greetCopy();

