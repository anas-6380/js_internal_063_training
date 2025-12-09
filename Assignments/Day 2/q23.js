// 23. Return minimum and maximum from an array

console.log("Question 23: Min and Max from an Array");

const prompt = require("prompt-sync")();

// take space-separated numbers
let input = prompt("Enter numbers separated by spaces: ");

// convert string → array of numbers
let arr = input.split(" ").map(Number);

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return { min, max };
}

let result = minMax(arr);

console.log("Answer: Minimum =", result.min);
console.log("Answer: Maximum =", result.max);
