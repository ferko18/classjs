//1. if claause

let student1 = {
  name: "Firealem",
  age: 20,
  isGraduated: true,
  isEmployed: true,
  isMarried: false,
  email: "fire@gmail.com",
};
let student2 = {
  name: "Blete",
  age: 20,
  isGraduated: false,
  isEmployed: false,
  isMarried: false,
  email: "fire@gmail.com",
};

let student3 = {
  name: "Geze",
  age: 20,
  isGraduated: true,
  isEmployed: true,
  isMarried: false,
  email: "fire@gmail.com",
};
let student4 = {
  name: "Wasie",
  age: 20,
  isGraduated: true,
  isEmployed: false,
  isMarried: true,
};

// condition: he should not be married and employed

const sendEmail = (student) => {
  if (student.isEmployed && !student.isMarried) {
    if (student.name === "Geze") {
      console.log(`Email sent to ${student.name} and wife`);
    } else {
      console.log(`Email sent to ${student.name}`);
    }
  } else if (student.name === "Geze") {
    console.log(`Email not sent to ${student.name}`);
  } else {
    console.log("you are not a student");
  }
};

sendEmail(student1);

//2. switch statement
let day = null;

const checkDay = (day) => {
  switch (day) {
    case "Monday":
      console.log("Today is Monday");
      break;
    case "Tuesday":
      console.log("Today is Tuesday");
      break;
    case "Wednesday":
      console.log("Today is Wednesday");
      break;
    case "Thursday":
      console.log("Today is Thursday");
      break;
    case "Friday":
      console.log("Today is Friday");
      break;
    case "Saturday":
      console.log("Today is Saturday");
      break;
    case "Sunday":
      console.log("Today is Sunday");
      break;
    default:
      console.log("Not a day");
  }
};

checkDay(day);

// error handling

const displayMessage = (person) => {
  try {
    if (!person.email) {
      throw new Error("This Person Does not have an email");
    }else {
        console.log(`Email sent to ${person.name}`)
    }
  } catch (error) {
    console.log(error.message);
  }
};

displayMessage(student4);
