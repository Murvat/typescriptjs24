// let a = (<HTMLInputElement>document.querySelector('.i-01')).value;

const checkBox = (<HTMLInputElement>document.querySelector('input[type="checkbox"]'));

if (checkBox.checked) {
    console.log('checked')
};

const r = document.querySelector('input[type = "radio"]:checked') as HTMLInputElement
console.log(r.value);

const select = document.querySelector('select');
console.log(select.value);

select.value = 'bbb';

const i8 = document.querySelector('.i-8') as HTMLInputElement;
console.log(i8.value);