// let x = 4.75;
// let m = 4.12;

// console.log(Math.round(x));
// console.log(Math.round(m));
// console.log(Math.floor(x));
// console.log(Math.ceil(x));
// // 4.75=> 4 and
// // random number between 1 and 100
// console.log(Math.round(Math.random() * 100));

// //parsing numbers
// // three functions parseInt, parseFloat, Number( ES6)
// // parseInt when you expect integer number

// let x2 = "4.75";
// let m2 = "412";

// console.log(parseInt(x2));
// console.log(parseInt(m2));

// console.log(parseFloat(x2));
// console.log(parseFloat(m2));

// console.log(Number(x2));
// console.log(Number(m2));

let x = "4.75";
let a = "4.75$";
let b = "Firealem";
let c = null;
let d = undefined;
let e = true;
let f = false;
let g = ["Firealem", "Blete", "Geze", "Wasie"];
let h = { name: "Firealem", age: 20, isMarried: false };
let j = "54";

console.log(parseInt(x));
console.log(parseInt(a));
console.log(parseInt(b));
console.log(parseInt(c));
console.log(parseInt(d));
console.log(parseInt(e));
console.log(parseInt(f));
console.log(parseInt(g));
console.log(parseInt(h));
console.log(parseInt(j));

console.log(parseFloat(x));
console.log(parseFloat(a));
console.log(parseFloat(b));
console.log(parseFloat(c));
console.log(parseFloat(d));
console.log(parseFloat(e));
console.log(parseFloat(f));
console.log(parseFloat(g));
console.log(parseFloat(h));
console.log(parseFloat(j));

console.log(Number(x));
console.log(Number(a));
console.log(Number(b));
console.log(Number(c));
console.log(Number(d));
console.log(Number(e));
console.log(Number(f));
console.log(Number(g));
console.log(Number(h));
console.log(Number(j));

console.log("Firealem"/ 10);
// isNaN => is not a number

console.log(isNaN("Firealem"));
console.log(isNaN("10xx"));

const checkIfNumber = (num) => {
  if (isNaN(num)) {
    return "not a number";
  }
  return  num*num;
}

console.log(checkIfNumber("12"));

//peceision => how many digits after the decimal point

let float1= 0.1; // 0100010001111000010100011110101110000101....
let float2= 0.2; // 0100010001111000010100011110101110000101....
let float3= 0.3; // 0100010001111000010100011110101110000101....

console.log(float1+float2===float3);
console.log(float1+float2==float3);

//Number class 

let num = new Number ("10")
let num4 = Number ("10")

console.log(num.valueOf())
console.log(num4)