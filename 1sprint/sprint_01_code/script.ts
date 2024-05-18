console.log('1');
console.log(5);

let n : number = 4;
console.log(n);
let n1 : number;
n1 = 99;
console.log(n1);

n = +'3';
console.log(n);

const n2 : number = 77;
console.log(n2);

const s1 : string = 'hello';
const s2 : string = ' TS';
console.log(s1 + s2);
let s3 : any;
s3 = 4;
console.log(s3, typeof s3);

const b1 : boolean = false;
console.log(b1, typeof b1);

const c1 : number = Number('333');
console.log(c1);

const c2 : string = String(888);
console.log(c2);

const c3 : boolean = Boolean(10);
console.log(c3);

document.querySelector('.out-1').textContent = String(c3);

const n5 : number = +document.querySelector('.out-2').textContent;
console.log(n5, typeof n5);

