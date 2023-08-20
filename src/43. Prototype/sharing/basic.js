//Define constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//Add shared method to proto type
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

//create instances
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

//Access shared methods
person1.sayHello();
person2.sayHello();
