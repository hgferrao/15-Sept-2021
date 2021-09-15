"use strict";
// const interface = "henry";
// console.log(interface);  //will  throw an error as interface is reserverd key.

// Function
// function logger() {
//   console.log("hey im a function");
//   console.log("henry");
//   const a = 10 + 15;
//   console.log(a);
// }
// logger();

// exapmle
// function fruitJuice(apple, grapes) {
//   console.log(apple, grapes);
//   const juice = `The juice is made by ${apple} apples and ${grapes}.`;
//   return juice;
// }
// // const myJuice = fruitJuice(3, 0);
// console.log(fruitJuice(3, 5));
// console.log(fruitJuice(4, 6));

// Function declration example
// function add(a, b) {
//   const c = a + b;
//   // return c;
// }
// add(11, 6);
// console.log(c); //this wont work due to block scope

//Function expression
// const calAge = function (birthYear) {
//   return 2027 - birthYear;
// };
// // const age1 = calAge(1992);
// console.log(calAge(1990));

//Arrow function // Good for one line of code .becomes complex when we have more code to be executed.
// const calAge = (birthYear) => 2027 - birthYear;
// const age = calAge(1991);
// console.log(age);

//calling function inside a function
// const cutPieces = function (fruit) {
//   return fruit * 2;
// };

// const fruitJuice = function (apple, grapes) {
//   const applePieces = cutPieces(apple);
//   const grapePieces = cutPieces(grapes);

//   const juice = `The juice is made by ${applePieces} apple pieces and ${grapePieces} grape pieces.`;
//   return juice;
// };
// console.log(fruitJuice(3, 6));

// Challenge

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(2, 4, 6));
// const scoreDolphin = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphin, scoreKoalas);

// const checkwinner = function (avgDolphines, avgKoalas) {
//   if (avgDolphines >= 2 * avgKoalas) {
//     console.log(`Dolpines win (${avgDolphines} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphines) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphines})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkwinner(scoreDolphin, scoreKoalas);

// checkwinner(600, 100);
// checkwinner(100, 500);

///Arrays

// let names = ["henry", "john", "vinay", "ferrao"];
// console.log(names);
// let num = new Array(10, 20, 30, 40, 50);
// console.log(num);
// let mixarray = new Array("henry", 20, 40, "ferrao");
// console.log(mixarray);
// // display array element using array index
// console.log(mixarray[0]); //displays first value present inside the array

// // To check Length of an arry
// console.log(mixarray.length);

// console.log(mixarray[mixarray.length - 1]); // to display last element of an array
// console.log(mixarray);

// mixarray.pop(); // removing array item at end
// console.log(mixarray);
// mixarray.shift("henry"); //removing array item at start
// console.log(mixarray);
// mixarray.unshift("sagar"); //adding array item at start
// console.log(mixarray);
// mixarray.push("santosh"); //adding new  array item at end
// console.log(mixarray);
// mixarray[2] = "james"; //replacing new  array item at index number 2
// console.log(mixarray);

// //Array inside arry
// let newArray = [["henry", "ferrao", 34], ["hi", "how", 2], "are", 35];
// console.log(newArray);
// console.log(newArray.length);

// let friends = ["henry", "roshan", "mohan", 40];
// console.log(friends.indexOf(40));
// console.log(friends.indexOf("mohan"));
// console.log(friends.indexOf("ferrao")); // to check the value which is not present in array  (o/p is -1)
// console.log(friends.includes("mohan")); // returns true
// console.log(friends.includes("ferrao")); // returns false

//challenge
//tip calculaor/////////////// Analize this for working structure
// const calTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44]; //declared an array
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])]; // sending each array value to function
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

///Objects
// creating object
const henry = {
  firstName: '"john"',
  lastName: "ferrao",
  job: "teacher",
  friends: ["hgf", "abc"],
};
console.log(henry);
console.log(henry.firstName); //Accesing the object elements using dot(.) operator
console.log(henry.friends);
