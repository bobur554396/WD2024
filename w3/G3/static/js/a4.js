let a = [3, 2, 5];

// Loop

// Option 1.
for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}
// console.log(i); -- error

console.log("---------------------");

// Option 2.
for(let num of a){
    // num = num + 1;
    console.log(num);
}

console.log("---------------------");
// Option 3.

function showNumber(n){ // named function
    console.log(n);
}

// showNumber(3333);
// a.forEach(showNumber);

a.forEach(function(n) { // anonimous function
    console.log(n);
});


let age = 20;
let student = {
    'name': 'KBTU',
    "id": "24B0231",
    // "age": age
    // age: age
    age,

    show: function () {
        console.log(this.name + " " + this.age);
    }
}

student.name = "SITE";
student.show();

console.log(student);


let string_json = JSON.stringify(student);
console.log(string_json);
console.log(JSON.parse(string_json));