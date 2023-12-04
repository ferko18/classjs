// naming==>objects, refrence types, non-primitive types, complex types
//1.object literal
let person = {
  name: "John",
  age: 38,
  isOld: false,
  address: {
    city: "Berlin",
    country: "Germany",
    jailAdress: {
      city: "Lille",
      country: "France",
    },
  },
  children: ["Alice", "Bob"],
};
console.log(typeof person);
console.log(person.address.jailAdress.country);

// 2. Map

let map1 = new Map();
map1.set("name", "Jane");
map1.set("age", 38);
console.log(map1);
//{ 'name' => 'John', 'age' => 38 }
console.log(map1.get("name"));

// 3. Set
let set1 = new Set();
set1.add("hello");
set1.add("hello2");
set1.add(20);

console.log(set1);
console.log(set1.has("hello3"));
//console.log(set1.size);

// 4. Array
let arr = [
  { name: "John", age: 23, fruitList: ["banana", "orange"], isOld: false },
  { name: "Jane", age: 84, fruitList: null, isOld: true },
];

//[value1, value2, value3]
//arrayName[index]
console.log(arr.length);
const stringArray = ["a", "b", "c", "d"];
const numArray = [1, 2, 3, 4, 5];
const boolArray = [true, false, true, false];
const objArray = [{ name: "John" }, { name: "Jane" }];
const mixedArray = ["a", 1, true, { name: "John" }];

// 5. Function
// function declaration
function sayHello(num1, num2) {
  let answer = num1 + num2;
  return answer;
}
// function expression === a variable assigned to  anonymous function
let sayHello2 = function (num1, num2) {
  let answer = num1 - num2;
  return answer;
};

console.log(sayHello2(11, 9));

// arrow function
const sayHello3 = (num1 = 11, num2 = 9) => {
  let answer = num1 * num2;
  return answer;
};

console.log(sayHello3(20, 200));

//IIFE ==> Immediately Invoked Function Expression
let my4thFun = () => {
  console.log("hello");
};

// (function($) {
//     // other code here
//   $(document).ready(function() {
//      // other code here
//    });
//  })(jQuery);

(function () {
  // other code here
  console.log("hello iffie");
})();

// 6. Date
let date1 = new Date("2021-01-01");
console.log(date1);

//7. RegExp
let reg1 = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
console.log(reg1.test("919-Firealem"));
//8 template literals
let ageJohn = 38;
let name = `John`;
let ageJane = 84;
let name2 = "Jane";

const ganeSentence = name2 + " is " + ageJane + " years old";
console.log(ganeSentence);
const ganeSentence2 = `${name} is ${ageJohn} years old`;
console.log(ganeSentence2);
const agePlus = 38;
// another example
const person2 = {
  name: "John",
  age: `${agePlus} years old`,
  isOld: false,
  gender: "Male",
  address: {
    city: "Berlin",
    country: "Germany",
  },
};

const personSentence = `${person2.name} is ${person2.age} years old and lives in ${person2.address.city}, ${person2.address.country}`;

const geeetingGenerator = (obj) => {
  const sentence = `${obj.name} is ${obj.age}  and lives in ${obj.address.city}, ${obj.address.country}`;
  return sentence;
};

console.log(geeetingGenerator(person2));


