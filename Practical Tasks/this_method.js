//Task:
//Create an object with a method that uses this.
//Call the method in the context of another object via call.

const obj1 = {
  name: "Will",
  foo: function () {
    console.log(this.name);
  },
};

const obj2 = {
  name: "Bob",
};

obj1.foo.call(obj2);
