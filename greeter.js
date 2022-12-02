// function greeter(person: string) {
//   return "Hello, " + person;
// }
// let user = "Jane User";
// document.body.textContent = greeter(user);
// let user = [0, 1, 2];
// document.body.textContent = greeter(user);
/*
greeter.ts:11:37 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

11 document.body.textContent = greeter(user);
                                       ~~~~


Found 1 error in greeter.ts:11
*/
// エラーはありましたが、greeter.jsファイルはまだ作成されていることに注意してください。
// Interface
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName
// }
// let user = { firstName: "Jane", lastName: "User" };
// document.body.textContent = greeter(user)
// Class
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
