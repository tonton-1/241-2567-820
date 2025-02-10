// let number1 = 5;
// let number2 = 8;
// // true && false = false
// let condition = number1 >= 3 && number2 >= 10;
// // true || false = !(true) = false
// condition = !(number1 >= 3 || number2 >= 5);
// console.log(condition);

// let age = 20;
// let gender = "male";
// // true && true = true
// if (age >= 20 && gender == "male") {
//   console.log("You are male");
// }

// let number = 24;
// if (!(number % 2 == 0)) {
//   console.log("Even number");
// }
// let counter = 0;
// while (counter < 10) {
//   console.log("Hello World");
//   counter += 1;
// }
// for (let counter = 0; counter < 10; counter++) {
//   console.log("Hello World");
// }

// let ages = [18, 19, 20];
// ages.push(21);
// console.log(ages);

// ages.pop();
// console.log(ages);

// let age = [19, 15, 20, 17];
// console.log(age);
// age.sort();
// console.log(age);

// let names = [];

// let name_list = ["John", "Doe", "Jane"];
// let [name1, name2, name3] = name_list;
// name_list.push("Smith");
// console.log(name_list.length);
// for (let index = 0; index < name_list.length; index++) {
//   console.log(name_list[index]);
// }

// object
// let student = [
//   {
//     name: "Jonh Doe",
//     age: 20,
//     grade: "A",
//   },
//   {
//     name: "Jane Doe",
//     age: 19,
//     grade: "B",
//   },
//   {
//     name: "Smith",
//     age: 21,
//     grade: "C",
//   },
// ];

// for (let index = 0; index < student.length; index++) {
//   console.log("Student number", index + 1);
//   console.log(student[index].name);
//   console.log(student[index].age);
//   console.log(student[index].grade);
// }
// let score1 = 50;
// let score2 = 60;
// let age = "";

// calculateGrade = (score) => {
//   if (score >= 80) {
//     grade = "A";
//   } else if (score >= 70) {
//     grade = "B";
//   } else if (score >= 60) {
//     grade = "C";
//   } else if (score >= 50) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }
//   return grade;
// };
// let grade1 = calculateGrade(score1);
// console.log("grade1:", grade1);
// let grade2 = calculateGrade(score2);
// console.log("grade2:", grade2);
// console.log(calculateGrade(30));

// let score = [10, 20, 30, 40];
// let newScore = [];
// for (let index = 0; index < score.length; index++) {
//   console.log(score[index]);
//   if (score[index] >= 30) {
//     newScore.push(score[index]);
//   }
// }

// console.log("newScore", newScore);
// newScore.forEach((element) => {
//   console.log("newscore ", element);
// });

//map filter
// score = score.map((element) => {
//   return element * 2;
// });
// // forEach
// score.forEach((element) => {
//   console.log("score", element);
// });

//object function
let students = [
  {
    name: "John Doe",
    age: 20,
    score: 50,
    grade: "A",
  },
  {
    name: "Jane Doe",
    age: 19,
    score: 60,
    grade: "B",
  },
];
// find
let student1 = students.find((element) => {
  if (element.name === "Jane Doe") {
    return element;
  }
});
let student2 = students.map((element) => {
  s = element.score * 2;
  return s;
});
console.log(student2);

let i = 3;
let a = 9;
let condition = i > 9 && a < 10;
console.log(condition);
