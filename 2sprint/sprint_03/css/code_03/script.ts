const a1 : string = 'Hello TS';
document.querySelector('.out-1').textContent = a1;

// получаем текст из парного тега

const a2 : string = document.querySelector('.out-2').textContent;
console.log(a2);

const a3 : number = +document.querySelector('.out-3').textContent;
console.log(a3, typeof a3);

// получаем value из input
// const i5 = <HTMLInputElement> document.querySelector('.i-5');
const i5 = document.querySelector('.i-5') as HTMLInputElement;
console.log(i5.value);

const i6 = document.querySelector('.i-6') as HTMLInputElement;
console.log(+i6.value);

i6.value = String(8888);

// checkbox
const checkbox = <HTMLInputElement> document.querySelector('input[type="checkbox"]');

if (checkbox.checked) {
    console.log('checked');
}

// radiobutton
const r =<HTMLInputElement> document.querySelector('input[name="r"]:checked');
console.log(r.value);

// select value
const select = <HTMLSelectElement> document.querySelector('.s-1');
console.log(select.value);

select.value = 'aaa';

// если элемента нет на HTML странице
const i8 = document.querySelector('.i-8') as HTMLInputElement | null;
console.log(i8);
// способ 1
console.log(i8?.value);
// способ 2
if (i8 !== null) {
    console.log(i8.value);
}