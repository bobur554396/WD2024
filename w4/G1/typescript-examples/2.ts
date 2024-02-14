let a: number = 2;
let b: string = 'hello';

console.log(a);
console.log(b);

// a = 'hi';

const user = {
    firstName: "Angela",
    lastName: "Davis",
    role: "Professor",
}
   
// console.log(user.name);

function sum(a: number, b: number): number {
    return a + b;
}

// console.log(sum('2', 3));


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


