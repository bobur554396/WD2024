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


const student = {
    name: 'Student 1',
    age: 20
};

// console.log(student.gpa);

interface Student {
    name: string;
    age: number;
    gpa: number;
}


interface Runnable {
    speed: number;
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person implements Runnable {
    gpa: number;

    constructor(name: string, age: number, gpa: number){
        super(name, age);
        this.gpa = gpa;
    }
}