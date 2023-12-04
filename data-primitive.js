// 1. string
let x = "hello";
console.log(typeof x);
//2. number
let y = 10;
let z = 3.1234567;
console.log(typeof y);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);

//3. bigint
let a = 1234567890123456789012345678901234567890n;

//4. boolean
let b = true;
console.log(typeof b);
let age = 38;
//let isOld = age > 30;
//console.log(isOld);

// function isOld2(age) {
//   if (age > 30) {
//     return "you are old";
//   }

//   return "you are young";
// }

// console.log(isOld2(18));

//5. undefined
var c=undefined;
console.log(typeof c);

//6. null===> JS is Weird!
let d = null;
console.log(typeof d);
//7. symbol
let e = Symbol("hello");
console.log(typeof e);
