//Task:
//Create a class with a private field #id and a method to read its value.

class Field {
  #id;
  constructor(id) {
    this.#id = id;
  }

  foo() {
    console.log(this.#id);
  }
}

const f1 = new Field(7);

f1.foo();
