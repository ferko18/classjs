function Hoister() {
  console.log(`I am logging x`, x);
  console.log("i am on line numer 1");
  var x = 7;
  console.log("i am on line numer 4", x);
}

// Hoister();

// function Hoister2() {
//   console.log(`I am logging x`, x);
//   console.log("i am on line numer 1");
//   let x = 7;
//   console.log("i am on line numer 4", x);
// }

// Hoister2();

function Hoister3() {
  console.log(`I am logging x`, x);
  console.log("i am on line numer 1");
  const x = 7;
  console.log("i am on line numer 4", x);
}

Hoister3();
