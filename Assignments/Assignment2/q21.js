// 21. Count vowels in a string

console.log("Question 21: Count vowels");

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

let count = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}

console.log("Answer: Number of vowels in the string =", count);
