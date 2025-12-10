

console.log("\n############### MAP METHOD ###############\n");

const nums1 = [2, 4, 6, 8];
console.log("Original:", nums1);

const doubled = nums1.map(n => n * 2);
console.log("Doubled using map():", doubled);


console.log("\n############### FILTER METHOD ###############\n");

const nums2 = [10, 25, 30, 5, 60];
console.log("Original:", nums2);

const filtered = nums2.filter(n => n > 20);
console.log("Filtered > 20 using filter():", filtered);


console.log("\n############### REDUCE METHOD ###############\n");

const nums3 = [1, 2, 3, 4, 5];
console.log("Original:", nums3);

const sum = nums3.reduce((acc, val) => acc + val, 0);
console.log("Sum using reduce():", sum);
