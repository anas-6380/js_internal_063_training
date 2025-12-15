// 24. Simple Menu Program using switch-case

console.log("Question 24: Simple Menu Calculator");

const prompt = require("prompt-sync")();

console.log("Menu:");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

let choice = Number(prompt("Enter your choice (1-4): "));
let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

let result;

switch (choice) {
  case 1:
    result = a + b;
    break;
  case 2:
    result = a - b;
    break;
  case 3:
    result = a * b;
    break;
  case 4:
    if (b !== 0) result = a / b;
    else result = "Cannot divide by zero";
    break;
  default:
    result = "Invalid choice";
}

console.log("Answer:", result);
