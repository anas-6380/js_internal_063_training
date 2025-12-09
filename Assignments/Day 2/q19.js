// 19. Grade based on marks

console.log("Question 19: Grade Calculation");

const prompt = require("prompt-sync")();

let marks = Number(prompt("Enter your marks: "));

let grade = "";

if (marks >= 90) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log("Answer: Your Grade is:", grade);
