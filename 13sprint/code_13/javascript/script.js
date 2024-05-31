"use strict";
class User {
}
class Person extends User {
    userName = '';
    email = '';
    constructor(username, email) {
        super();
        this.userName = username;
        this.email = email;
    }
}
console.log(new Person('mark', 'as@mail.com'));
//# sourceMappingURL=script.js.map