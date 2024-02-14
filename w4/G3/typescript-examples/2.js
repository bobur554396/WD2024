var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 2;
var b = 3;
console.log(a + b);
// C++
// int sum(int a, int b){
//     return a + b;
// }
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
// console.log(sum('2', 3));
var user = {
    name: 'User 1',
    age: 20
};
// console.log(user.gpa);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, gpa) {
        var _this = _super.call(this, name, age) || this;
        _this.gpa = gpa;
        return _this;
    }
    return Student;
}(Person));
