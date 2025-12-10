const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("Original Fruits:", fruits);

// Print all fruits using for loop
console.log("Printing fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Add Papaya at the end
fruits.push("Papaya");
console.log("After push('Papaya'):", fruits);

// Remove last element
fruits.pop();
console.log("After pop():", fruits);

// Add Kiwi at the beginning
fruits.unshift("Kiwi");
console.log("After unshift('Kiwi'):", fruits);

// Remove first element
fruits.shift();
console.log("After shift():", fruits);

// Check if Mango exists
console.log("Does Mango exist?", fruits.includes("Mango"));

// Find index of Papaya
console.log("Index of Papaya:", fruits.indexOf("Papaya"));
