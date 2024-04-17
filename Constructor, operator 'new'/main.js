//Task2
function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();

calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//Task2
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Enter the number to add?", 0);
  };
}

let accumulator = new Accumulator(0);

accumulator.read();
accumulator.read();
alert(accumulator.value);
