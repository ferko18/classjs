//type cohersion

let x = 10;
let y = "10";
console.log(x + y);

//1. js converted 10 to "10"
//2. "10" + "10" = "1010"
// soluton ==explicit cohersion

let result = x + Number(y);

console.log(result);

// truthy and falsy values

// falsy values:"",0,undefined, null, false, NaN

const someVar =1==1 ? "I am truthy" : "I am falsy";
console.log(someVar);

console.log(Number("Firealem"))