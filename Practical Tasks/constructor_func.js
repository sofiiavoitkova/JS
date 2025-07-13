//Task:
//Create a Person constructor function that takes a name and age. 
// Add a greet method via the prototype.

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`Hey ${this.name}`)
}

const Person1 = new Person("Will", 50);
const Person2 = new Person("William", 10);

Person1.greet();
Person2.greet();

// console.log(Person.prototype)
// console.log(Person.prototype.constructor)