let a = [4, 2, 3, 5, true, "hello"];

console.log(a);
a.push(7);
console.log(a);
console.log(a.length);

a.pop();
console.log(a.length);
console.log(a);

console.log(a.indexOf(3));
console.log(a.includes("hello"));

let b = a.slice(2, 4); // [2, 4)
console.log(a);
console.log(b);

console.log("----------------");

console.log(a);
let c = a.splice(2, 3);
console.log(a);
console.log(c);

console.log("----------------");

let d = a.map(function(value, index) {
    return value * value;
});
console.log(a);
console.log(d);

console.log("----------------");

d = a.map((val, idx) => val * val); // arrow function
console.log(a);
console.log(d);


console.log("----------------");

phone = "87123123";
a = {
    'name': "kbtu",
    address: "Tole bi 59",
    phone,
    show: function () {
        console.log(this.name);
    }
}

a.name = "SITE";
console.log(a.show());
