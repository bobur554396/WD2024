let a = 2;
let b = 3;

console.log(a + b);

console.log(2 == '2');
console.log(2 === '2');

function sum(a, b){
    return a + b; // '2' + 3 => '2' + '3' => '23'
}

console.log(sum(2, 3));
console.log(sum('2', 3));

const user = {
    name: 'User 1',
    age: 20
}

console.log(user.gpa);
