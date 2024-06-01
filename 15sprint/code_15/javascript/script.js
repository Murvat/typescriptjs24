"use strict";
const user = {
    username: 'Murvat',
    password: 'dedq12',
    stayLogin: true,
    // CSRF: 'adss',
};
// const person: ILoginForm = {
//     username: 'Mustafayev'
// };
console.log(user);
// console.log(person);
const user2 = {};
user2.password = 'asda2';
user2.username = 'asds';
user2.stayLogin = true;
console.log(user2);
const user3 = {
    username: 'Murvat',
    password: 'murvat12',
    name: 'Mustafayev',
    stayLogin: false,
    age: 324,
    getYear() {
        return this.age % 10;
    }
};
class Role {
    username = '';
    password = '';
    stayLogin = false;
}
class C {
    a;
    b;
}
//# sourceMappingURL=script.js.map