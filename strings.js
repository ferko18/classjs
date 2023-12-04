//string manuplation
//1.check length

const myFirstString = "I love JavaScript";
console.log(myFirstString.length);

//2. find index of a character
console.log(myFirstString.indexOf("l"));

//3. string concatenation

// using + operator
const firstName = "Firealem";
const lastName = "Mamuye";
const fullName = firstName + " " + lastName;
console.log(fullName);

// using concat method
const fullName2 = firstName.concat(" ", lastName);
console.log(fullName2);

//first difference
// concat method can take multiple arguments
// second difference

let x = "10";
let y = "Firealem";
let usingPlus = y + x;
let usingConcat = x.concat(y);
console.log(usingPlus);
console.log(usingConcat);

let fullName3 = `${firstName} ${lastName}`;
console.log(fullName3);
//4. slice method
let myString = "I love JavaScript";
const slicedString = myString.slice(7, 17);
console.log(slicedString);

const lorem100 = ` lorem ipsum dolor sit amet consectetur adipisicing elit. `;
// replace method
const neWText = lorem100
  .replace("lorem ipsum dolor sit amet consectetur", "")
  .trim();
console.log(neWText);

// trim method
const myString2 = "    I love JavaScript    ";
console.log(myString2.trim());
console.log(myString2.trimStart());
console.log(myString2.trimEnd());

//string transformation
const myString3 = "I love JavaScript";
console.log(myString3.toUpperCase());
console.log(myString3.toLowerCase());

//split method
let myFruitList = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
console.log(myFruitList.split("/"));
let myFruitList2 = "mango, cherries, kiwi, grapes, pear, peach, orange, lemon";
console.log(myFruitList2.split(", "));
console.log(myFruitList2.split(""));

let paragraph = `I love teaching and empowering people. I teach HTML, CSS, JS, React, 
Python. HTML and CSS are languages for Firealem frontend development. JS and Python are
 languages for backend development.`;

console.log(paragraph.search("GezeM"));
console.log(paragraph.indexOf("Geze"));

/// if Geze is found==> Geze Erenso, if not found, write a note saying "Geze is not found"

const checkForGeze = (str, message) => {
  let gezeIsFound = str.search("Geze") !== -1 ? true : false;
  if (gezeIsFound) {
    str1 = str.replace("Geze", "Geze Erenso");
    return str1;
  } else {
    const str2 = str.concat(message);
    return str2;
  }
};

console.log(checkForGeze(paragraph, "Firealem is not found"));

// charAt method
console.log(paragraph.charAt(100));

//includes method
console.log(paragraph.includes("Geze"));

console.log(paragraph.substring(0, 10));

// string coercion

// + operator
// `` template literals

let myNumber = 10 + "10";
let myNumber2 = `${10}${"10"}`;
console.log(myNumber);
console.log(myNumber2);
console.log(10+Number("10"))

// examle 
let a = 10;
let b= true;
let c = false;
let d = undefined;
let e = null;

let f= [1,2,3,4,5];
let g = {name: "Firealem"};
let h = 0

// two ways , String() and .toString()
console.log(String(a));
console.log(String(b));
// "true"
console.log(String(c));
// "false"
console.log(String(d));
// "undefined"
console.log(String(e));
// "null"
console.log(String(f));
console.log(typeof f, "type check")
console.log(String(g));
console.log(String(h));


console.log(a.toString());
console.log(b.toString());
console.log(c.toString());
//console.log(d.toString());
// console.log(e.toString());
console.log(f.toString());
console.log(g.toString());
console.log(h.toString());