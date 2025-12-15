// 18. Reverse a string (without using reverse())

console.log("Question 18: Reverse a string");

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log("Answer: Reversed string is:", reversed);
