//Task:
//Create an Animal object with a speak method.
//Create a Dog object that inherits from Animal and overrides the speak method.

const animal = {
  speak: function () {
    console.log("Speak method");
  },
};

const dog = Object.create(animal);

dog.speak = function () {
  console.log("Dog speaks");
};

animal.speak();
dog.speak();
