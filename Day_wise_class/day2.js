

let a = 23;
const b = "abc";
var c = 78;
d = 88;

console.log("Task 1 Output:");
console.log("a =", a);
console.log("b =", b);
console.log("c =", c);
console.log("d =", d);

console.log("\nTask 2 Output:");
try { a = 50; console.log("New a =", a); } catch(e) { console.log(e.message); }
try { b = "xyz"; console.log("New b =", b); } catch(e) { console.log("Error changing b:", e.message); }
try { c = 100; console.log("New c =", c); } catch(e) { console.log(e.message); }
try { d = 999; console.log("New d =", d); } catch(e) { console.log(e.message); }

console.log("\nTask 3 Output:");
try { let a = 500; console.log(a); } catch(e) { console.log("Error redeclaring a:", e.message); }
try { const b = "zzz"; console.log(b); } catch(e) { console.log("Error redeclaring b:", e.message); }
try { var c = 999; console.log("Redeclared c =", c); } catch(e) { console.log(e.message); }
try { var d = 777; console.log("Redeclared d =", d); } catch(e) { console.log("Error redeclaring d:", e.message); }


let l="abc"
let m=""
let n=null
let o;


console.log("\nTask 4 Output:");
console.log("l =", l);
console.log("m =", m);
console.log("n =", n);
console.log("o =", o);

console.log(typeof l)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof o)

console.log(" \n Task 5");


let score="33ab"
console.log("score =", score);

console.log(typeof score)
console.log(typeof (score))

let ans= Number (score)
console.log(typeof ans)
console.log(typeof (ans))
console.log("value",ans)


