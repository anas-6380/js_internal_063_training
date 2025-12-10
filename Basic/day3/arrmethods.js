const arr = [10, 20, 30];

console.log("Original Array:", arr);

// 1. push() → add at end
arr.push(40);
console.log("After push(40):", arr);

// 2. pop() → remove last element
arr.pop();
console.log("After pop():", arr);

// 3. shift() → remove first element
arr.shift();
console.log("After shift():", arr);

// 4. unshift() → add at beginning
arr.unshift(5);
console.log("After unshift(5):", arr);

// 5. includes() → check if value exists
console.log("arr.includes(20):", arr.includes(20));
console.log("arr.includes(100):", arr.includes(100));

// 6. indexOf() → get index of a value
console.log("arr.indexOf(20):", arr.indexOf(20));
console.log("arr.indexOf(100):", arr.indexOf(100));  // returns -1
