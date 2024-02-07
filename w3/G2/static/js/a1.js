// line comment

/*
    multi 
    line 
    comment
*/

console.log("Message from external file");

// Data types
console.log(typeof(1));
console.log(typeof(1.5));
console.log(typeof('1'));
console.log(typeof("hello"));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof([1, 2, 3]));
console.log(typeof({'a': 1}));
console.log(typeof(Symbol('ß')));
console.log(typeof(function(){}));


// Variable creation

// Option 1.
var a = 2;
console.log(typeof a);

a = "hello";
a = true;
a = {'name': "kbtu"};
a = 'h';
a = [1, 2, 3];
console.log(typeof a);
console.log(a);

console.log("------------------------")


// Scope: Global, Local


// Option 2.
let b = 3;
b = "hi";
console.log(b);

// Option 3.
const PI = 3.14;



let c;
console.log(c);