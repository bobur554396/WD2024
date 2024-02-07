let a = [4, 2, 3, 5, "hi"];

console.log(a.length);
console.log(a);

a.push(true);
console.log(a.length);
console.log(a);

a.pop();
console.log(a.length);
console.log(a);

console.log("---------------------");

let b = a.slice(2, 4); // [2, 4)
console.log(a);
console.log(b);

console.log("---------------------");

console.log(a);
b = a.splice(2, 3);
console.log(a);
console.log(b);


console.log("---------------------");
console.log(b.indexOf('hi'))
console.log(b.includes(55));


console.log("---------------------");
// Callback - ?

let c = [3, 4, 5];
let d = c.map(function (value, index) {
    return value * value;
});
console.log(c);
console.log(d);

console.log("---------------------");

c = [3, 4, 5];
d = c.map((value, index) => value * value); // arrow function
console.log(c);
console.log(d);




