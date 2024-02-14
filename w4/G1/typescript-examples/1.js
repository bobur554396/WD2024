let a = 2;
let b = '2';

a = 'hello';

console.log(a == b);
console.log(a === b);

// int sum(int a, int b){
//     return a + b;
// }

function sum(a, b){
    return a + b; // '2' + 3 => '2' + '3' = "23"
}

console.log(sum(2, 3));
console.log(sum('2', 3));

const user = {
    firstName: "Angela",
    lastName: "Davis",
    role: "Professor",
}
   
console.log(user.name);