"use strict";
class T01 {
    x = 7;
    static sale = 0.05;
    static x = 8;
    static pi() {
        return 3.144;
    }
}
// T01.sale = 0.1;
const obj = new T01();
// console.log(obj.x);
// console.log(T01.sale)
// console.log(obj.sale)
console.log(T01.x);
console.log(T01.pi());
class User {
    username;
    password;
    static passwordLength = 8;
    static passwordValidate(pass) {
        return (pass.length > 8);
    }
}
const u = new User();
u.username = 'aasda';
u.password = 'aoooooa';
//# sourceMappingURL=script.js.map