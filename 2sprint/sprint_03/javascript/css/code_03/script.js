"use strict";
const a1 = 'Hello TS';
document.querySelector('.out-1').textContent = a1;
// получаем текст из парного тега
const a2 = document.querySelector('.out-2').textContent;
console.log(a2);
const a3 = +document.querySelector('.out-3').textContent;
console.log(a3, typeof a3);
// получаем value из input
// const i5 = <HTMLInputElement> document.querySelector('.i-5');
const i5 = document.querySelector('.i-5');
console.log(i5.value);
const i6 = document.querySelector('.i-6');
console.log(+i6.value);
i6.value = String(8888);
// checkbox
const checkbox = document.querySelector('input[type="checkbox"]');
if (checkbox.checked) {
    console.log('checked');
}
// radiobutton
const r = document.querySelector('input[name="r"]:checked');
console.log(r.value);
// select value
const select = document.querySelector('.s-1');
console.log(select.value);
select.value = 'aaa';
// если элемента нет на HTML странице
const i8 = document.querySelector('.i-8');
console.log(i8);
// способ 1
console.log(i8?.value);
// способ 2
if (i8 !== null) {
    console.log(i8.value);
}
//# sourceMappingURL=script.js.map