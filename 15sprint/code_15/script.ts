interface ILoginForm {
    username: string;
    password: string;
    stayLogin: boolean;
    CSRF?: string;
}


const user: ILoginForm = {
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

const user2 = {} as ILoginForm;
user2.password = 'asda2'
user2.username = 'asds'
user2.stayLogin = true;
console.log(user2);

interface ISF extends ILoginForm {
    name: string;
    age: number;
    getYear(): number;
}

const user3: ISF = {
    username: 'Murvat',
    password: 'murvat12',
    name: 'Mustafayev',
    stayLogin: false,
    age: 324,
    getYear(): number {
        return this.age % 10;
    }

}

class Role implements ILoginForm {
    public username: string = '';
    public password: string = '';
    public stayLogin: boolean = false;
}

interface IA {
    a: number;
}

interface IB {
    b: number;
}
class C implements IA, IB {
    public a: number;
    public b: number;
}
