// syntax
//1. function declaration

let age = "Firealem";
let name = 38;
console.log(myFunction(name, age));
// console.log(myFunction2(nameVar));
// console.log(myFunction3(nameVar));

function myFunction(name, age) {
  let greeting = `Hello ${name}! You are ${age} years old!`;

  return greeting;
}

//2. function expression
let myFunction2 = function (name) {
  let greeting = `Hello ${name}!`;
  return greeting;
};

//3. arrow function
let myFunction3 = (name) => {
  let greeting = `Hello ${name}!`;
  return greeting;
};

/// invoking a function

// console.log(myFunction(nameVar));
// console.log(myFunction2(nameVar));
// console.log(myFunction3(nameVar));
// Higher order functions

//function 1 : takes an bject and returns a greeting with the peroon's full name and age
//function 2: decides if a person is a child, adult or senior citizen
//function 3: takes takes both functions as arguments and returns a paragraph with the retrur values of both functions
const person = {
  firstName: "Firealem",
  lastName: "Erko",
  age: 38,
};

const function1 = (person) => {
  let greeting = `Hello ${person.firstName} ${person.lastName}! You are ${person.age} years old!`;
  return greeting;
};
const function2 = (person) => {
  if (person.age < 18) {
    return "child";
  } else if (person.age >= 18 && person.age < 65) {
    return "adult";
  } else {
    return "senior citizen";
  }
};

const function3 = (person, callbackFunction1, callbackFunction2) => {
  let greeting = callbackFunction1(person);
  let ageStatus = callbackFunction2(person);
  let paragraph = `${greeting} You are a ${ageStatus} lorem....`;
  return paragraph;
};
// const function3 = (person) => {
//     let greeting = function1(person);
//     let ageStatus =function2(person);
//     let paragraph = `${greeting} You are a ${ageStatus} lorem....`;
//     return paragraph;
//   };

  // pure function and impure function


console.log(function3(person, function1, function2));

const mytest = (str)=>{
  const arr = str.split(" ");
  let sum =0;
  for(let i = 0; i<arr.length; i++){
    sum=sum+Number(arr[i])
  }
  return sum;
}
console.log(mytest("1 2 3 4 5 "));

const  sum =  str=> str.split(" ").reduce((acc,curr)=>acc+Number(curr),0);var Student = {

  college: "abc",

};

var stud1 = Object.create(Student);

delete stud1.college;

console.log(stud1.company);

const obj = {
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

const charlie = Object.create(obj);
charlie.name = 'Charlie';
charlie.age = 20;

charlie.greet();