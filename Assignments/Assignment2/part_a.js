// --------------------------------------
// PART A – BASIC
// --------------------------------------

// 1. Sum of two numbers
console.log("Question 1: Sum of two numbers");
let a = 10, b = 20;
console.log("Answer:", a + b);
console.log("****************\n");

// 2. Print "Hello <name>"
console.log("Question 2: Print Hello <name>");
function sayHello(name) {
  console.log("Answer:", "Hello " + name);
}
sayHello("Anas");
console.log("****************\n");

// 3. Even/Odd Check
console.log("Question 3: Even / Odd Check");
let num = 7;
console.log("Answer:", num % 2 === 0 ? "Even" : "Odd");
console.log("****************\n");

// 4. Celsius → Fahrenheit
console.log("Question 4: Celsius to Fahrenheit");
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Answer:", fahrenheit);
console.log("****************\n");

// 5. Max among 3 numbers
console.log("Question 5: Max among 3 numbers");
let x = 10, y = 40, z = 25;
console.log("Answer:", Math.max(x, y, z));
console.log("****************\n");

// 6. Find string length
console.log("Question 6: String length");
let str = "JavaScript";
console.log("Answer:", str.length);
console.log("****************\n");

// 7. Toggle boolean
console.log("Question 7: Toggle Boolean");
let flag = true;
flag = !flag;
console.log("Answer:", flag);
console.log("****************\n");

// 8. Concatenate strings
console.log("Question 8: Concatenate Strings");
let s1 = "Hello", s2 = "World";
console.log("Answer:", s1 + " " + s2);
console.log("****************\n");

// 9. Positive / Negative / Zero
console.log("Question 9: Positive / Negative / Zero");
let n = -5;
if (n > 0) console.log("Answer: Positive");
else if (n < 0) console.log("Answer: Negative");
else console.log("Answer: Zero");
console.log("****************\n");

// 10. var / let / const example
console.log("Question 10: var / let / const Example");
var v = 10;
let l = 20;
const ct = 30;
console.log("Answer:", v, l, ct);
console.log("****************\n");

// 11. Multiplication table
console.log("Question 11: Multiplication Table of 5");
let tableNum = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}
console.log("****************\n");

// 12. Sum of first 10 natural numbers
console.log("Question 12: Sum of first 10 natural numbers");
let sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log("Answer:", sum);
console.log("****************\n");

// 13. Switch-case → day name
console.log("Question 13: Day Name Using Switch");
let day = 3;
switch(day){
  case 1: console.log("Answer: Monday"); break;
  case 2: console.log("Answer: Tuesday"); break;
  case 3: console.log("Answer: Wednesday"); break;
  case 4: console.log("Answer: Thursday"); break;
  case 5: console.log("Answer: Friday"); break;
  case 6: console.log("Answer: Saturday"); break;
  case 7: console.log("Answer: Sunday"); break;
  default: console.log("Answer: Invalid day");
}
console.log("****************\n");

// 14. Function → Factorial
console.log("Question 14: Factorial Function");
function factorial(n){
  let fact = 1;
  for (let i = 1; i <= n; i++) fact *= i;
  return fact;
}
console.log("Answer:", factorial(5));
console.log("****************\n");

// 15. Function → Voting Eligibility
console.log("Question 15: Voting Eligibility Function");
function canVote(age){
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}
console.log("Answer:", canVote(17));
console.log("****************\n");
