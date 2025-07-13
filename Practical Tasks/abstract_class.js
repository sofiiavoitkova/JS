//Task: Create a base class Shape with an area method that throws an error.
//Inherit Circle, which implements area.

class Shape {
  area() {
    throw Error("Error");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);

console.log(circle.area());
