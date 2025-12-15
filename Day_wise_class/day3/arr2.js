const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Original Fruits:", fruits);

console.log("Printing fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("\n\n#################################\n\n");
console.log("\n\n######## USING MAP ########\n\n");

let numbers = [1, 2, 3];
console.log("Original Numbers:", numbers);

let doubled = numbers.map(n => n * 2);
console.log("Doubled Numbers:", doubled);

console.log("\n\n######## USING FILTER (n > 20) ########\n\n");

let filtered = doubled.filter(n => n > 20);
console.log("Filtered Numbers:", filtered);



console.log("\n\n########## REDUCE METHOD ##########\n");

let total = numbers.reduce((acc, val) => acc + val, 0);
console.log("After reduce (sum):", total);


