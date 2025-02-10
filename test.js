// ติวก่อนสอบ

// let scores = [10, 20, 30, 5];
// console.log(scores[2]);
// scores.forEach((s) => {
//   console.log("Score ", s);
// });
// scores = scores.map((s) => {
//   return s * 2;
// });
// scores.find((s) => {
//   if (s == 20) {
//     console.log("Find 20");
//   }
// });
// scores.console.log(scores);

// let products = [
//   { name: "Shirt", price: 35 },
//   { name: "Sock", price: 50 },
//   { name: "Hat", price: 45 },
// ];

// let priceDouble = products.map((p) => {
//   return (p.price *= 2);
// });
// let findExpensive = products.filter((p) => {
//   if (p.price < 100) {
//     return true;
//   }
// });
// let findProducts = products.find((p) => {
//   if (p.name == "Hat") {
//     return true;
//   }
// });
// console.log(findExpensive);
// console.log(priceDouble);
// console.log(products);
// console.log(findProducts.price);

// let student1 = student.find((s) => {
//   if (s.name == "ton") {
//     console.log("Found name ton");
//   }
// });

// console.log(student[0].name);

// for (index = 0; index < student.length; index++) {
//   console.log("Student ", index + 1);
//   console.log("Name ", student[index].name);
//   console.log("Age ", student[index].age);
//   console.log("Score ", student[index].score);
// }

// let number = [10, 20, 30, 40, 50];

// let newNumber = number.filter((n) => {
//   if (n >= 30) {
//     return n;
//   } else {
//     return false;
//   }
// });
// console.log(newNumber);

// Quiz
// let students = [
//   { name: "John", score: 80 },
//   { name: "Jane", score: 90 },
//   { name: "Jim", score: 85 },
// ];
// // โจทย์: ใช้ .filter() เพื่อกรองนักเรียนที่มีคะแนนมากกว่า 80
// let filterstudent = students.filter((s) => {
//   if (s.score > 80) {
//     return true;
//   }
// });
// console.log(filterstudent);

// let doubleScore = students.map((s) => {
//   return (s.score *= 2);
// });

// let find = students.find((s) => {
//   if (s.score === 180) {
//     return true;
//   }
// });
// console.log("รายชื่อคนที่มีคะแนนสูงสุด");
// console.log(find.name);
// console.log("คะแนน", find.score);
// console.log(students);

const students = [
  {
    name: "John",
    age: 16,
    subjects: ["Math", "Science", "History"],
  },
  {
    name: "Alice",
    age: 17,
    subjects: ["Math", "English", "Art"],
  },
  {
    name: "Bob",
    age: 16,
    subjects: ["Geography", "Science", "Math"],
  },
  {
    name: "๋Johnson",
    age: 16,
    subjects: ["Geography", "Science", "Math"],
  },
];
let sum = 1;
let newList = students.map((s) => {
  return s.age * 2;
});
console.log(newList);

// let index = 1;
// students.forEach((s) => {
//   console.log(index);
//   index++;
// });

// index = 0;
// students.forEach((s) => {
//   console.log(`Student No :${index} Age : ${s.age}`);
//   index++;
// });
// let ageadd = students.map((s) => {
//   return (s.age += 1);
// });
// console.log("New age", ageadd);

// console.log(students);
