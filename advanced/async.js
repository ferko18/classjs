// syncronous js

function myFunc1() {
  console.log("myFunc1");
}

function myFunc2() {
  console.log("myFunc2");
}

function myFunc3() {
  console.log("myFunc3");
}

// myFunc1();
// myFunc2();
// myFunc3();

// what if myFunction2 has some delay?
// case 1=> 1=>2=>3
// case 2=> 1=>3=>2

function myFunc3() {
  console.log("myFunc3");
}

function myFunc4() {
  setTimeout(function () {
    console.log("myFunc4");
  }, 1000);
}

function myFunc5() {
  console.log("myFunc5");
}

myFunc3();
myFunc4();
myFunc5();

// asyncronous js==> callback functions, promises, async await

//1. using callback functions

function myFunc6(a, b, callback) {
  let res = a + b;
  callback(res);
}
// res= ==5

function myFunc7(resFromFunc6, callback) {
  setTimeout(function () {
    let res = resFromFunc6 * 3;
    callback(res);
  }, 1000);
}

// res===15

function myFunc8(resFromFunc7) {
  const res = resFromFunc7 * 10;
  console.log(res);
}

myFunc6(2, 3, function (resFromFunc6) {
  myFunc7(resFromFunc6, function (resFromFunc7) {
    myFunc8(resFromFunc7);
  });
});

// using promises=>pending, resolved, rejected
// syntax
// const myPromise = new Promise(function (resolve, reject) {  }) // resolve and reject are functions

const myFunction9 = function (a, b) {
  return new Promise(function (resolve, reject) {
    let res = a + b;
    resolve(res);
  });
};

const myFunction10 = function (resFromFunc9) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let res = resFromFunc9 * 3;
      resolve(res);
    }, 1000);
  });
};

const myFunction11 = function (resFromFunc10) {
  return new Promise(function (resolve, reject) {
    let res = resFromFunc10 * 10;
    resolve(res);
  });
};

const doAll = function (a, b) {
  myFunction9(a, b)
    .then(function (resFromFunc9) {
      return myFunction10(resFromFunc9);
    })
    .then(function (resFromFunc10) {
      return myFunction11(resFromFunc10);
    })
    .then(function (resFromFunc11) {
      console.log(resFromFunc11);
    });
};

doAll(2, 3);

/// async await
const doAllAsync = async function (a, b) {
  const resFromFunc9 = await myFunction9(a, b);
  const resFromFunc10 = await myFunction10(resFromFunc9);
  const resFromFunc11 = await myFunction11(resFromFunc10);
  console.log(resFromFunc11);
};

doAllAsync(2, 3);

// consuming rest apis
//1. using fetch
let todosList = [];
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((data) => data.json())
//   .then((res) => {
//     todosList = res;
//     console.log(todosList);
//   })
//   .catch((err) => console.log(err));
//   console.log(todosList)

//2. using async await
const getTodos = async function () {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// delete a todo
// 1. using fetch
fetch("https://jsonplaceholder.typicode.com/todos/1", { method: "DELETE" })
  //   .then((res) => res.json())
  .then((res) => console.log(res.status))
  .catch((err) => console.log(err));

getTodos();
