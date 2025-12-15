// 22. Fibonacci series up to n terms

console.log("Question 22: Fibonacci Series");

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter number of terms: "));

let a = 0, b = 1;

if (n <= 0) {
  console.log("Answer: Invalid input");
} else if (n === 1) {
  console.log("Answer: 0");
} else {
  console.log("Answer:");
  console.log(a);  // first term
  console.log(b);  // second term

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
