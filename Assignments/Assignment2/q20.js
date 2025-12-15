// 20. Calculator function (+, -, *, /)

console.log("Question 20: Simple Calculator");

const prompt = require("prompt-sync")();

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let op = prompt("Enter operator (+, -, *, /): ");

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}

let result = calculate(a, b, op);

console.log("Answer:", result);
