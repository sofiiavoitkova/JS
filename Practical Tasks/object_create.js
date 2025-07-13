//Task: Create a userProto object with a sayHello method.
//Create a user1 that inherits from userProto and call the method.

const userProto = {
  sayHello: function () {
    console.log("Hello");
  },
};

const user1 = Object.create(userProto);

user1.sayHello();
