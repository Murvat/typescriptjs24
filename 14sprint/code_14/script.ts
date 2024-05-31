class T01 {
    public x: number = 7;
    public static readonly sale: number = 0.05;
    public static x: number = 8;

    public static pi(): number {

        return 3.144;
    }
}
// T01.sale = 0.1;
const obj = new T01();
// console.log(obj.x);
// console.log(T01.sale)
// console.log(obj.sale)

console.log(T01.x);
console.log(T01.pi())
class User {
    public username: string;
    public password: string;
    public static passwordLength: number = 8;

    public static passwordValidate(pass): boolean {
        return (pass.length > 8);
    }
}
const u = new User();
u.username = 'aasda';
u.password = 'aoooooa';
