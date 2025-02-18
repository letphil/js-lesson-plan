/**
 * - Control Flow
 * truthy values - "string", true, 1, 9
 * falsy values - null, NaN, undefined, false, 0

  - `if` Statements
  - `else` Statements
  - `else if` Statements
  - `switch` Statements
  - `for` Loops
  - `while` Loops
  - `do while` Loops
  - `break` and `continue` Statements
 */

// `if` Statements

// const age = 21;
// if (age >= 21) {
//   console.log("This is true");
// }

// // `else` Statements
// if (age < 21) {
//   console.log("This is true");
// } else {
//   console.log("This is false");
// }

//  'if' 'else' statments
// const favouriteArtist = "Michael Jackson";
// if (favouriteArtist === "Michael Jackson") {
//   console.log("This is true");
// } else {
//   console.log("This is false");
// }

// const mathGrade = 79;
// if (mathGrade >= 79) {
//   console.log("This student got an A");
// } else {
//   console.log("This student did not get an A");
// }

// // `else if` Statements
// const age = 16;

// if (age >= 21) {
//   console.log("person can drink");
// } else if (age >= 18) {
//   console.log("person can come into bar");
// } else {
//   console.log("person is too young");
// }

// const grade = 70;
// if (grade >= 80) {
//   console.log("this person got an A");
// } else if (grade >= 65) {
//   console.log("This person got a B");
// } else if (grade >= 50) {
//   console.log("This person got a C");
// } else if (grade >= 40) {
//   console.log("this person got a D");
// } else {
//   console.log("FAILURE");
// }

// const person = {
//   hairColor: "black",
//   age: 36,
// };

// // || - or operator
// // && - and operator

// if (person.hairColor === "brown" && person.age >= 35) {
//   console.log("matched");
// } else {
//   console.log("not matched");
// }

// `switch` Statements
// const color = "red";
// switch (color) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   default:
//     console.log("Color is not red or blue");
//     break;
// }

// // `for` Loops
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   sum += i;
//   console.log("sum =", sum);
// }

//  for loop
// let sum = 0;
// // On / 2
// for (let i = 1; i < 150; i += 2) {
//   sum += i;
//   console.log("sum =", sum);
// }

// // 0n
// for(let i = 0; i < 150; i++) {
//   if(i % 2) sum+=i
// }

// // `while` Loops
// let i = 0;
// while (i < 10) {
//   console.log(`Number ${i}`);
//   i++;
// }

// function getEvenSums(num) {
//   let i = 2,
//     sum = 0;
//   while (i < num) {
//     sum += i;

//     i += 2;
//   }

//   return sum;
// }

// const evenSum = getEvenSums(600);
// console.log("evenSum =", evenSum);

// // // `do while` Loops
// let j = 0;
// do {
//   console.log(`Number ${j}`);
//   j++;
// } while (j < 10);

// // `break` and `continue` Statements
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log("2 is my favorite number");
//     continue;
//   }

//   if (i === 5) {
//     console.log("Stop the loop");
//     break;
//   }

//   console.log(`Number ${i}`);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     console.log("7 is my favourite number");
//     continue;
//   }

//   if (i === 8) {
//     console.log("Stop the loop");
//     break;
//   }
//   console.log(`Number ${i}`);
// }
