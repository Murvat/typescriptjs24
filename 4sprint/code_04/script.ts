function t01() {
    console.log(1)
};
t01()
//return data-type;

function t02(): number {
    return 4;
}
//procedure;

function t03(): void {
    document.querySelector('.out-1').textContent = 'Poka'
}
t03();

function t04(a: number, b: number): number {
    return a * b
};
console.log(100 + t04(5, 9));

//procedure;
function t05(a: number, b: number): void {
    console.log(a * b);
};

t05(5, 6);

//number of arguments
function t06(a: number, b?: number): number {
    return a * b;
};
;
console.log(t06(20, 30));
//several types of values;
function checkEmail(email: string): string | boolean {
    if (email.includes('@')) { return email.toLocaleLowerCase() }
    else {
        return false
    };

};

console.log(checkEmail('AAAadmialasd.ua'));
