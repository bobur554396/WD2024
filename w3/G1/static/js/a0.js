// Line comment

/*
    multi
    line 
    comment
*/

let a = [2, 4, 8, 6];

console.log(typeof a);
console.log(a);

// Loop 1
// var i -> Global scope
// let i -> Local scope
for(let i = 0; i < a.length; i++) {
    
    console.log(a[i]);
}
// console.log('i = ' + i);
// console.log(`i = ${i}`);


// Callback
console.log('---------------')

// Loop 2
function showNumber(a) { // named function
    console.log(a);
}  
a.forEach(showNumber);

console.log('---------------')
// anonymos function
a.forEach(function(n) { 
    console.log(n);
});

console.log('-----Loop 3----------')


// Loop 3
for(const n of a) {
    console.log(n);
}


console.log('---------------')


a = [1, 2, 3];
b = a;

b.push(4);
a.push(10);

console.log(a);
console.log(b);

console.log(a.indexOf(3));
console.log(a.includes(3));


let c = a.slice(2, 4); // [2, 4)
console.log(a);
console.log(c);

console.log('---------------');

console.log(a);
c = a.splice(2, 2); 
console.log(a);
console.log(c);


console.log('---------------');
console.log(a);
let d = a.map(function(value, index) {
    return value * value;
});
console.log(d);

console.log('---------------');
console.log(a);
d = a.map((value, index) => value * value); // arrow function
console.log(d);












