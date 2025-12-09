// 16. Check whether a number is Prime (Using let)

console.log("Question 16: Check whether a number is Prime");

// prompt should NOT change → use const here
const prompt = require("prompt-sync")();

// everything else can be let
let num = Number(prompt("Enter a number: "));

let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {  
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log("Answer:", num, "is prime?", isPrime);
