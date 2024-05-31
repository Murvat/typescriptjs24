abstract class User {
    public abstract userName: string;
    public abstract email: string;
}

class Person extends User {
    public userName: string = '';
    public email: string = '';
    constructor(username: string, email: string) {
        super();
        this.userName = username;
        this.email = email;
    }

}

console.log(new Person('mark', 'as@mail.com'));