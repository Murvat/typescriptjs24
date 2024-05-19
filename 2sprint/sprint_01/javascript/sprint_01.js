"use strict";
// let a = (<HTMLInputElement>document.querySelector('.i-01')).value;
const checkBox = document.querySelector('input[type="checkbox"]');
if (checkBox.checked) {
    console.log('checked');
}
;
const r = document.querySelector('input[type = "radio"]:checked');
console.log(r.value);
const select = document.querySelector('select');
console.log(select.value);
select.value = 'bbb';
const i8 = document.querySelector('.i-8');
console.log(i8.value);
//# sourceMappingURL=sprint_01.js.map