// inheritance=>enforced with prototype chain

// const myObj = {
//   name: "Firealem",
//   greet: function () {
//     console.log(`hi ${this.name}`);
//   },
// };
// console.log(myObj);

// const myArr = [1, 2, 3];

// let x = "global";

// const Animal = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// Animal.prototype.greet = function () {
//   console.log(`hi ${this.name}`);
// };

// const dog = new Animal("dog", 10);
// console.log(dog);
// dog.greet();
// const cat = new Animal("cat", 5);
// console.log(cat)
// cat.greet();

// funtional approach
// birds and fish ==> some functions that generate different behaviors

let fish1 = {
  name: "fish1",
  age: 1,
};

const fishMoving = function (obj) {
  console.log(`${obj.name} is moving`);
};
const fishEating = function (obj) {
  console.log(`${obj.name} is eating`);
};
const fishSwimming = function (obj) {
  console.log(`${obj.name} is swimming`);
};
const hasGills = function (obj) {
  console.log(`${obj.name} has gills`);
};

let bir1 = {
  name: "bir1",
  age: 2,
};

const birdMoving = function (obj) {
  console.log(`${obj.name} is moving`);
};

const birdEating = function (obj) {
  console.log(`${obj.name} is eating`);
};

const birdFlying = function (obj) {
  console.log(`${obj.name} is flying`);
};
const hasWings = function (obj) {
  console.log(`${obj.name} has wings`);
};

// oop approach

const Animal = function (name, age) {
  this.name = name;
  this.age = age;
};

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};
Animal.prototype.move = function () {
  console.log(`${this.name} is moving`);
};

const firealem = new Animal("firealem", 38); // instance of Animal, eat and move are instance methods
console.log(firealem);
firealem.eat();

// Bird constructor function
const Bird = function (name, age) {
  Animal.call(this, name, age);
  this.hasWings = true;
};

Bird.prototype = Object.create(Animal.prototype); // Bird is inheriting from Animal
Bird.prototype.constructor = Bird; // reset the constructor

Bird.prototype.fly = function () {
  console.log(`${this.name} is flying`);
};
Bird.prototype.hasWings = function () {
  console.log(`${this.name} has wings`);
};

const bird1 = new Bird("bird1", 2);
console.log(bird1);
bird1.eat();

// using class synthax
class Animal2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  move() {
    console.log(`${this.name} is moving`);
  }
}

class Bird2 extends Animal2 {
  constructor(name, age) {
    super(name, age);
    this.hasWings = true;
  }
  fly() {
    console.log(`${this.name} is flying`);
  }
  hasWings() {
    console.log(`${this.name} has wings`);
  }
}

const bird2 = new Bird2("bird2", 2);

