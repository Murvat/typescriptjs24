"use strict";
const user = {
    name: 'pupkin',
    email: 'pupkin@mail.ua'
};
console.log(user);
console.log(user.name);
// user.password = 'as2ssd2';
user.name = 'Tom';
// user.name = 234;
console.log(user['name']);
//additional properties
const user2 = {
    name: 'Nick',
    email: 'nick_332@mail.com',
    // age: 44,
};
console.log(user2);
// console.log(user2.test);
if ('test' in user2) {
    console.log(1);
}
else {
    console.log(0);
}
//
if ('email' in user2) {
    console.log(1);
}
else {
    console.log(0);
}
//non necessary property;
console.log(user2.age);
//object as an argument;
function userProcess(some_var) {
    console.log(some_var.email);
}
const obj = {
    name: 'Fred',
    email: 'freddy@gmail.com',
    test: false
};
userProcess(obj);
userProcess({
    name: 'Fred',
    email: 'freddy@gmail.com',
});
//decomposition
function foo({ name, email }) {
    console.log(name, email);
}
foo(user2);
//# sourceMappingURL=script.js.map