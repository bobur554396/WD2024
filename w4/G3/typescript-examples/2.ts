let a: number = 2;
let b: number = 3;

console.log(a + b);

// C++
// int sum(int a, int b){
//     return a + b;
// }

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2, 3));
// console.log(sum('2', 3));


const user = {
    name: 'User 1',
    age: 20
}

// console.log(user.gpa);


interface Runnable {
    speed: number;

    run();
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // instance methods
}

class Student extends Person implements Runnable {
    gpa: number;

    constructor(name: string, age: number, gpa: number) {
        super(name, age);
        this.gpa = gpa;
    }

    run() {
        // overriding the interface method
    }

    // instance methods
}