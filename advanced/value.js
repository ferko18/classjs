// primitive types passed by value==> created a new memory location for the new variable

let x = 10;
let y = x;
console.log(y);

x = 200;

console.log(y);

console.log(x, y);

let mm = 200;
let nn = 200;
console.log(mm === nn, "primitie ");

// objects are passed by reference==> they share the same memory location ( heap)
let person = {
  name: "Firealem",
  age: 38,
};

const newPerson = person;
person.name = "Geze";
console.log(person, newPerson);

let xx = {
  name: "Firealem",
  age: 38,
  address: { city: "Addis", country: "Ethiopia" },
};
let yy = {
  name: "Firealem",
  age: 38,
  address: { city: "Addis", country: "Ethiopia" },
};

console.log(xx === yy);

let zz = { ...xx };
console.log(zz === xx);
console.log(newPerson === person);

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}
console.log(shallowEqual(xx, yy));
function deepEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }

  if (
    typeof object1 !== "object" ||
    object1 === null ||
    typeof object2 !== "object" ||
    object2 === null
  ) {
    return false;
  }

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(object1[key], object2[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual(xx, yy));

console.log(JSON.stringify(xx) === JSON.stringify(yy));
