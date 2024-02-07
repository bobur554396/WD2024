// Loop
let a = [3, 2, 5];
console.log(a);

// Option 1.
for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}
console.log('------------------');

// console.log(i);

// Option 2.
for(const number of a){
    // number = number + 1;
    console.log(number);
}

console.log('------------------');

// Callback - ?

// Option 3.
function showNumber(n) { // named Function
    console.log(n);
}
a.forEach(showNumber);

console.log('------------------');

a.forEach(function(n) { // ananymous function
    console.log(n);
});