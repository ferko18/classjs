//diff between var, let and const

// reassign and redeclare
//1. var: yes yes
//2. let: yes no
//3. const: no no

var a = 10;
a = 20; // reassign
var a = 30; // redeclare

let b = 10;
b = 20; // reassign
// let b = 30; // redeclare // error

const c = 10;
// c = 20; // reassign // error
// const c = 30; // redeclare // error

// scope

// var: function scope
// let and const: block scope

function abc() {
  {
    var d = 10;
    let e = 20;
    const f = 30;
    console.log(a, b, c);
  }

  if (1 === 1) {
    console.log(d);
    // console.log(e);
    console.log(f);
  }
}

abc();

