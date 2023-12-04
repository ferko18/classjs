// create array
// array litral
let myGrades = [
  true,
  98,
  95,
  93,
  90,
  89,
  "85",
  80,
  { key: 5 },
  ["cooking", "reading", "coding"],
  65,
  60,
  55,
  50,
];
// constructor
let myGrades1 = new Array(
  100,
  98,
  95,
  93,
  90,
  89,
  85,
  80,
  75,
  70,
  65,
  60,
  55,
  50
);
// array of

const myNewAr = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
// Array.from

const myset = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(myset);
const myNewAr1 = Array.from(myset);
console.log(myNewAr1);

console.log(myGrades.length);
console.log(myGrades[2]);

// manipulate array
const studentList = [
  { name: "Firealem", age: 38 },
  { name: "Bele", age: 48 },
  { name: "Abebe", age: 58 },
  { name: "Kebede", age: 68 },
  { name: "Mamo", age: 78 },
  { name: "Tilahun", age: 88 },
  { name: "Teshome", age: 98 },
];

// add to the end
//studentList.push({ name: "Geze", age: 28 });

// spread operator
// const newSteudent = { name: "Geze", age: 28 };
// const newStudentList = [...studentList, newSteudent];
// console.log(studentList)
// console.log(newStudentList)
// add at the beginning
//studentList.unshift({ name: "Geze", age: 28 });

/// remove from the end
////studentList.pop();

// remove from the beginning
//studentList.shift();
//console.log(studentList);

// splice
// syntax: array.splice(start, deleteCount, item1, item2, item3)
//console.log(studentList.splice(2, 2));

const newArray = studentList.splice(2, 2);
console.log(newArray);
console.log(studentList);

// loop through array
const studentList2 = [
  { name: "Firealem", age: 38 },
  { name: "Bele", age: 48 },
  { name: "Firealem2", age: 28 },
  { name: "Abebe", age: 58 },
  { name: "Kebede", age: 68 },
  { name: "Mamo", age: 78 },
  { name: "Tilahun", age: 88 },
  { name: "Teshome", age: 98 },
];

oldPeople = [];
//for loop
for (let i = 0; i < studentList2.length; i++) {
  if (studentList2[i].age > 70) {
    oldPeople.push(studentList2[i]);
  }
}

let youngPeople = [];

// for of
for (const student of studentList2) {
  if (student.age < 70) {
    youngPeople.push(student);
  }
}

console.log(youngPeople);

// forEeach
// syntax: array.forEach(function(currentValue, index, arr), thisValue)

const somePeople = [];

const callBack = (student) => {
  if (student.age < 50) {
    somePeople.push(student);
  }
};

const returnValue = studentList2.forEach(() => {});

console.log(somePeople);
console.log(returnValue);

// searching through an array
//find method

const studentList3 = [
  { name: "Firealem", age: 38 },
  { name: "Bele", age: 48 },
  { name: "Firealem2", age: 28 },
  { name: "Abebe", age: 58 },
  { name: "Kebede", age: 68 },
  { name: "Mamo", age: 78 },
  { name: "Tilahun", age: 88 },
  { name: "Teshome", age: 98 },
];

const foundStudent = studentList3.find((student) => {
  return student.name.includes("m");
});
console.log(foundStudent);

//filter

const filteredStudent = studentList3.filter((student) => {
  return student.name.includes("m");
});

console.log(filteredStudent);

const studentList4 = [
  { name: "Firealem", age: 38, salary: 2000 },
  { name: "Bele", age: 48, salary: 1000 },
  { name: "Firealem2", age: 28, salary: 15000 },
  { name: "Abebe", age: 58, salary: 17000 },
  { name: "Kebede", age: 68, salary: 18000 },
  { name: "Mamo", age: 78, salary: 1900 },
  { name: "Tilahun", age: 88, salary: 19000 },
  { name: "Teshome", age: 98, salary: 15000 },
];

//map
const newArr = studentList4.map((student) => {
  return `hi ${student.name}, you are ${student.age} years old`;
});

// at the first step==> ["Firealem"]

console.log(newArr);

const newMap = studentList4.map((student) => {
  const newObj = { ...student, isOld: student.age > 30 };
  return newObj;
});

console.log(newMap);

// reduce method
// syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reducedValue = listOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(reducedValue);

const reducedObject = studentList4
  .map((item) => item.salary)
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
console.log(reducedObject);

// const reducedObject1 = studentList4.reduce((accumulator, currentValue) => {
//   return { ...accumulator, ...currentValue };
// });
console.log(studentList4.length - 1);
console.log(studentList4[studentList4.length - 1]);

//checking element in array
const studentList5 = [
  { name: "Firealem", age: 38, salary: 2000 },
  { name: "Bele", age: 48, salary: 1000 },
  { name: "Firealem2", age: 28, salary: 15000 },
  { name: "Abebe", age: 58, salary: 17000 },
  { name: "Kebede", age: 68, salary: 18000 },
  { name: "Mamo", age: 78, salary: 1900 },
  { name: "Tilahun", age: 88, salary: 19000 },
  { name: "Teshome", age: 98, salary: 15000 },
];

//includes
const foundStudent2 = studentList5.find((student) => {
  return student.name.includes("Bele");
});
const isThereFirealm = studentList5
  .map((item) => item.name)
  .includes("Firealem");
console.log(foundStudent2, "foundStudent2");

isSudentFound = foundStudent2 ? true : false;

console.log(isSudentFound);
// some
const foundSome = studentList5.some((student) => {
  return student.name.includes("Bele");
});

console.log(foundSome, "foundSome");

// combining arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
// concat
let array3 = array1.concat(array2);
console.log(array3);

// spread operator
let array4 = [...array1, ...array2];
console.log(array4);

// slice
let array5 = array1.slice(0, 9);

console.log(array5);
const studentList6 = [
  { name: "Firealem", age: 38, salary: 2000 },
  { name: "Bele", age: 48, salary: 1000 },
  { name: "Abebe", age: 58, salary: 17000 },
  { name: "Kebede", age: 68, salary: 18000 },
  { name: "Mamo", age: 78, salary: 1900 },
  { name: "Tilahun", age: 88, salary: 19000 },
  { name: "Teshome", age: 98, salary: 15000 },
  { name: "Firealem2", age: 28, salary: 15000 },
];

const slicedArray2 = studentList6.slice(2, 5);
console.log(slicedArray2);

const arr56 = [1, 2, 3];
console.log(arr56.reverse());

/// sorting array
const arr57 = [100, 1, 5, 6, 39, 17];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(arr57.sort());
console.log(fruits.sort());

const sortingFunc = (a, b) => {
  if (a.salary > b.salary) {
    return 1;
  }
  if (a.salary < b.salary) {
    return -1;
  }
  return 0;
};

console.log(arr57.sort(sortingFunc));

console.log(
  studentList6.sort((a, b) => {
    if (a.salary > b.salary) {
      return 1;
    }
    if (a.salary < b.salary) {
      return -1;
    }
    if (a.salary === b.salary) {
      if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      return 0;
    }
  })
);
