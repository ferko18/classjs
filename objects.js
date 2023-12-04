// different ways to create objects
// 1. object literal
//example
const person = {
  name: "Firealem",
  age: 38,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
  hobbies: ["cooking", "reading", "coding"],
  address: {
    street: "1234",
    city: "Addis Ababa",
    state: "AA",
  },
  isOld: function () {
    return this.age > 30;
  },
};
console.log(person.isOld(), "isold");
// console.log(person);

//2. constructor function

function Person(name, age, hobbies, address) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
  this.address = address;
  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
  this.isOld = this.age > 30;
}

let person1 = new Person("Firealem", 38, ["cooking", "reading", "coding"], {
  street: "1234",
  city: "Addis Ababa",
  state: "AA",
});
// console.log(person1);

let person2 = new Person("Bele", 48, ["cooking", "reading", "coding"], {
  street: "1234",
  city: "Addis Ababa",
  state: "AA",
});

//   console.log(person2);

//3. Object.create()// check why {}

// 4 classes
class PersonClass {
  constructor(name, age, hobbies, address) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.address = address;
  }
  greet() {
    return "Hello, my name is " + this.name;
  }
  isOld() {
    return this.age > 30;
  }
}

console.log(
  new PersonClass("Firealem", 38, ["cooking", "reading", "coding"], {
    street: "1234",
    city: "Addis Ababa",
    state: "AA",
  })
);

const firealemP = new PersonClass(
  "Firealem",
  38,
  ["cooking", "reading", "coding"],
  {
    street: "1234",
    city: "Addis Ababa",
    state: "AA",
  }
);

console.log(firealemP.isOld());
console.log(firealemP.greet());

// 5. factory function // check why object object
function createPerson(name, age, hobbies, address) {
  return {
    name: name,
    age: age,
    hobbies: hobbies,
    address: address,
    greet: function () {
      return `Hello, my name is  ${this.name}`;
    },
    isOld: function () {
      return this.age > 30;
    },
  };
}

console.log(
  createPerson("Firealem", 38, ["cooking", "reading", "coding"], {
    street: "1234",
    city: "Addis Ababa",
    state: "AA",
  })
);

const firealemF = createPerson(
  ("Firealem",
  38,
  ["cooking", "reading", "coding"],
  {
    street: "1234",
    city: "Addis Ababa",
    state: "AA",
  })
);

console.log(firealemF.isOld());
console.log(firealemF.greet());

//6. new Object()

const person3 = new Object();
person3.name = "Firealem";
person3.age = 38;
person3.hobbies = ["cooking", "reading", "coding"];
person3.address = {
  street: "1234",
  city: "Addis Ababa",
  state: "AA",
};
console.log(person3);
console.log(Object.create(person));

const myObject = Object.create(person);
console.log(myObject.greet());

// Object manuplation
// 1. adding properties or modifying properties
let dog = {
  name: "dog",
  age: undefined,
  color: undefined,
  isMale: true,
  isFemale: false,
  isOld: function () {
    return this.age > 10;
  },
};

//dog.name = "Mr.Dog";

//dog.isAlive = true;

// 2. looping through objects
// for in loop
for (let key in dog) {
  if (dog[key] === undefined) {
    dog[key] = "unknown";
  }
}
console.log(dog);

//object.keys
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

//copying objects
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy);

//spread operator
var copy2 = { ...obj };
console.log(copy2);
copy2.a = 1000;
console.log(copy2);
console.log(obj);

let object1 = {
  a: 100,
  b: 200,
};

let object2 = {
  c: 300,
  d: 400,
};

// merge object1 and object2
let object3 = { ...object1 };
console.log(object3);
let object4 = Object.assign({}, object2);
console.log(object4);
// computed properties

let catName = "cat";
let catObj = {
  [catName]: "meow",
};

console.log(catObj);

// object from entries
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

console.log(Object.fromEntries(entries));

let arr = [
  ["foo", "bar"],
  ["baz", 42],
];
let arr2 = arr.flat();
console.log(arr2);
// console.log(Object.fromEntries([arr2]));
// console.log(Object.fromEntries("Firealem"));

//destructuring objects

//console.log(dog.name)

// using destructuring
let name2 = dog.name;
let age2 = dog.age;
let { name, age, ...hi } = dog;
console.log(name2);
console.log(name);
console.log(hi);
console.log(dog);

const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 16 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];

