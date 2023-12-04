//1. && , both conditions should be true

let amIHappy;

let IHaveAGirlFriend = true;
let IHaveACar = true;
amIHappy = IHaveAGirlFriend && IHaveACar;
console.log(amIHappy);

//2. || , one condition should be true

amIHappy = IHaveAGirlFriend || IHaveACar;
console.log(amIHappy);

//let isAllowedToDrive = isAbve18 && hasAdrivingLicense;

//3. ternary operator

let age = 87;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

//4. string concatenation
let sum = 1 + 1;
console.log(sum);
let sum2 = "1" + " " + "1" + " " + "Firealem";
console.log(sum2);

console.log(typeof null);

//5. typeof operator
let x = 10;
let y = 12;

const result =
  typeof x === "number" && typeof y === "number" ? x * y : "not a number";

  // false && true?x * y : "not a number"
    // false?x * y : "not a number"

  console.log(result)

  // 6 in operator
  var person = {
    name: "John",
    age: 30,
    job: "Engineer",
    email:"fg@yahoo.com"
  };
  var person2 = {
    name: "John",
    age: 30,
    job: "Engineer",
    
  };
  var person3 = {
    name: "John",
    age: 30,
    job: "Engineer",
    email:""
  };

  console.log("email" in person)

  const displayEmail = (person) => {
    if ("email" in person && person.email !== "") {
      console.log(person.email);
    } else {
      person.email="emailnotgiven@yahoo.com"
    }
  }

displayEmail(person3)
console.log(person3)
