// line comment

/*
    multi
    line 
    comment
*/

console.log('Message from external file');

console.log(typeof(4));
console.log(typeof(4.5));
console.log(typeof('hello'));
console.log(typeof('h'));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof([1, 2, 3]));
console.log(typeof({'name': "KBTU"}));
console.log(typeof(Symbol('ƒ')));
console.log(typeof(function(){}));
console.log("\'hello\'");


console.log("---------------------");

// Variables

// Option 1.
var a = 2;
a = "hello";
console.log(typeof a);
console.log(a);

console.log("---------------------");

// Scope / Context

// Option 2.
let b = 3;
b = true;
console.log(typeof b);
console.log(b);

console.log("---------------------");
// Option 3.
const PI = 3.14;
// PI = 4;


