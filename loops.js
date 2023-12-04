// for loop
// initialize, condition, increment/decrement
//i++ => i = i + 1

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// execution number 1 => i===0, 0<10, 0+1 => 1
// execution number 2 => i===1, 1<10, 1+1 => 2
//execution number 9 => i===9, 9<10, 9+1 => 10
//execution number 10 => i===10, 10<10, no more execution

// I wanted to print my name 5 times
for (let i = 0; i <100 ; i++) {
  console.log("Firealem");
}

//while loop

let m = 10;
while (m < 20) {
  console.log(m);
  m++;
}

//do while loop

let n = 10;
do {
  console.log(n);
  n++;
} while (n < 20);

// let userInput;
// do {
//   prompt("Please enter your name");
//   console.log(userInput);
// } while (userInput !== "Firealem");


// break and continue
// break => stop the loop
for (let i = 100; i < 110; i++) {
  if (i === 106) {
    continue;
  }
  console.log(i);
}