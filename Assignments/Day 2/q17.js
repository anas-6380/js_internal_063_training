// 17. Sum of digits of a number

console.log("Question 17: Sum of digits of a number");

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

let sum = 0;
let temp = num;

while (temp > 0) {
  let digit = temp % 10;   // get last digit
  sum += digit;            // add to sum
  temp = Math.floor(temp / 10); // remove last digit
}

console.log("Answer: Sum of digits of", num, "is", sum);
