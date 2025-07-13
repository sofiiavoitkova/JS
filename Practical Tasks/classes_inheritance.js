//Task:
//Create classes Vehicle and Car, where Car inherits Vehicle.
//Vehicle has a drive method, and Car has a honk method.

class Vehicle {
  drive() {
    console.log("Drive");
  }
}

class Car extends Vehicle {
  honk() {
    console.log("Honk");
  }
}

const car1 = new Car();

car1.drive();
car1.honk();
