sayHello();
//sayHello2=undefined;

//function declaration
function sayHello() {
  console.log("Hello");
}

//function expression
let sayHello2 = function () {
  console.log("Hello2");
};
sayHello2();
//function declarations are hoisted
//function expressions are not hoistedsayHello2();