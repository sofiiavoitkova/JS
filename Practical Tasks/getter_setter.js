//Task: Implement a Rectangle class with width and height properties, as well as an area getter.

class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 2);

console.log(rectangle.getArea());
