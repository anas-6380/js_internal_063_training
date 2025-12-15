// 25. Check Armstrong Number

console.log("Question 25: Armstrong Number Check");

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

let sum = 0;
let temp = num;

// count digits
let digits = String(num).length;

while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** digits; // digit raised to number of digits
  temp = Math.floor(temp / 10);
}

let isArmstrong = (sum === num);

console.log("Answer:", num, "is Armstrong?", isArmstrong);
