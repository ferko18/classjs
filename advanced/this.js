let a = 100;
console.log(this);

const myObj = {
  a: 1000,
  myMethod() {
    console.log(this);
  },
};

myObj.myMethod();

// 1. global context - window object
// 2. function context - window object

function myFunc() {
  console.log(this, "from myFunc");
}

myFunc();
// 3. method context - object
const myObj2 = {
  name: "Firealem",
  age: 38,
  myMethod() {
    console.log(`hi ${this.name}`);
  },
};

myObj2.myMethod();

// 4. constructor context - new object
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this, "from constructor");
}
const person1 = new Person("Firealem", 38);

// explicit binding; call, apply, bind (when you want to use the function later after setting the context)

function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };
const obj2 = { a: 10, b: 20 };
console.log(add.call(obj, 3, 4)); // 1 + 2 + 3 + 4 = 10
console.log(add.apply(obj, [3, 4])); // 1 + 2 + 3 + 4 = 10
console.log(add.call(obj2, 3, 4));
const boundFunction = add.bind(obj2, 34, 4);
console.log(boundFunction());

//lexical scope - the scope of a variable is defined by its location within the source code
let x = "global";
function outer() {
  let x = "outer";
  function inner() {
    //let x = "inner";
    console.log(x); // 'inner'
  }
  inner();
  console.log(x); // 'outer'
}
outer();
console.log(x); // 'global'


// closure - a function that has access to its outer function scope even after the outer function has returned
function createGreeting(greeting) {
    return function(name) {
        console.log(greeting + ', ' + name);
    };
}
const sayHello = createGreeting('Hello');
sayHello('Alice'); // "Hello, Alice"

const myArrowFunc = () => {
    console.log(this);
}
myArrowFunc();

function myFunc() {
    const myArrowFunc = () => {
        console.log(this);
    }
    myArrowFunc();
}
myFunc();

const myObj4 = {
    name: 'Firealem',
    myMethod() {
        const myArrowFunc = () => {
            console.log(this);
        }
        myArrowFunc();
    }
}
myObj4.myMethod()