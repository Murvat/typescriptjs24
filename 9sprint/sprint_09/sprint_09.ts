// Внимание! В данном спринте применяется иной подход к описанию задач. Здесь один класс может описываться в разных тасках. Учтите это!

// Task 01
// Создайте класс Paragraph_01 содержащий следующие свойства: text - текст внутри параграфа. Тип укажите самостоятельно. Реализуйте метод render который создает объект p (тег параграф), добавляет в него текст из свойства text и возвращает параграф. 
class Paragraph_01 {
    text: string;
    render(): HTMLParagraphElement {
        let pElem = document.createElement('p') as HTMLParagraphElement;
        pElem.textContent = this.text;
        return pElem
    }
}

const p_01 = new Paragraph_01();
p_01.text = 'A paragraph is a series of sentences that are organized and coherent.';
document.querySelector('.out-1').append(p_01.render());

// Task 02
// Создайте класс Paragraph_02. Скопируйте в него реализацию свойств и методов из Paragraph_01. Допишите конструктор, который принимает текст и присваивает его свойству text класса. Кстати, надеюсь вы догадались указать, что метод render возвращает тип HTMLParagraphElement.

// тут пишем класс
class Paragraph_02 {
    constructor(text: string) {
        this.text = text;

    }
    text: string;
    render(): HTMLParagraphElement {
        let pElem = (<HTMLParagraphElement>document.createElement('p'));
        pElem.textContent = this.text;
        return pElem

    }
}
const p_02 = new Paragraph_02('В раю без изменений.');
document.querySelector('.out-2').append(p_02.render());


// Task 03
// Создайте класс Paragraph_03. Скопируйте в него реализацию свойств и методов из Paragraph_02. Добавьте свойство bold типа boolean, которое по умолчанию равно false. В метод render() добавьте строку, которая проверяет свойство bold и если оно равно true, оборачивает весь текст внутри параграфа тегом b. В конструктор добавьте вторым аргументом свойство bold.

class Paragraph_03 {
    text: string;
    bold?: boolean;

    constructor(text: string, bold: boolean = false) {
        this.text = text;
        if (bold !== undefined) {
            this.bold = bold
        }
    }

    render(): HTMLParagraphElement {
        let pElem = document.createElement('p') as HTMLParagraphElement;
        if (this.bold) {
            let bElem = document.createElement('b');
            bElem.textContent = this.text;
            pElem.append(bElem);
        } else {
            pElem.textContent = this.text;
        }

        return pElem;

    }

}

const p_03 = new Paragraph_03('Земля – это память, за которую стоит бороться.', false);
document.querySelector('.out-3').append(p_03.render());

// Task 04
// Внесите изменение в предыдущий класс, сделав свойство bold, в функции конструкторе - необязательным.


// Для проверки кода снимите комментарий ниже
const p_04 = new Paragraph_03('Земля – это память, за которую стоит бороться.');
document.querySelector('.out-4').append(p_04.render());


// Task 05
// Создайте класс Paragraph_05, в который скопируйте содержимое класса Paragraph_03. Внесите изменения в конструктор - удаляйте пробелы по краям текста перед присвоением в свойство text. Добавьте изменение в метод render(), при выводе текста первая буква должна быть заглавной всегда.

// тут пишем класс
class Paragraph_05 {
    text: string;
    bold?: boolean;

    constructor(text: string, bold: boolean = false) {
        this.text = text;
        this.bold = bold;
    }
    render(): HTMLParagraphElement {
        let pElem = document.createElement('p') as HTMLParagraphElement;
        this.text = this.text.trim();
        let firstLetter: string = this.text.charAt(0).toUpperCase();
        this.text = firstLetter + this.text.slice(1);
        if (this.bold) {
            let bElem = document.createElement('b');
            bElem.textContent = this.text.trim();
            pElem.append(bElem);
        } else {
            pElem.textContent = this.text;
        }

        return pElem;

    }
}

// Для проверки кода снимите комментарий ниже
const p_05 = new Paragraph_05('  и смерти нет почётней той, что ты принять готов за кости пращуров своих, за храм своих богов.  ');
document.querySelector('.out-5').append(p_05.render());


// Task 06
// Изучите как устроен класс ParagraphExample и как в него передаются аргументы. Здесь применяется деструкция, данный подход очень облегчает работу если аргументов несколько.

class ParagraphExample {
    text: string;
    wrap: string;

    constructor({ text, wrap }: { text: string, wrap: string }) {
        this.text = text;
        this.wrap = wrap;
    }

    render(): HTMLElement {
        const elem = document.createElement(this.wrap);
        elem.textContent = this.text;
        return elem;
    }
}

// Для проверки кода снимите комментарий ниже
const obj_06: { text: string, wrap: string } = {
    text: 'Если у нас правда есть души, они сотканы из любви...',
    wrap: 'div'
}
const p_06 = new ParagraphExample(obj_06);
console.log(p_06);
document.querySelector('.out-6').append(p_06.render());


// Task 07
// Напишите класс List_07, который принимает свойство data тип - массив строк. Возвращает список ul с перечислением данных элементов. Генерация списка производится методом render().

// тут пишем класс

class List_07 {
    data: string[];
    constructor(data: string[]) {
        this.data = data;
    };

    render(): HTMLUListElement {
        let ulElem = document.createElement('ul') as HTMLUListElement;
        for (let item of this.data) {
            let liElem = document.createElement('li') as HTMLLIElement;
            liElem.textContent = item;
            ulElem.appendChild(liElem);
        }
        return ulElem;

    }
}
// Для проверки кода снимите комментарий ниже
const ul_07 = new List_07(['Нужно работать, а не вспоминать.', 'Даже у оружия нервы не в порядке.']);
console.log(ul_07);
document.querySelector('.out-7').append(ul_07.render());


// Task 08
// Напишите класс List_08 (скопируйте код предыдущего класса в него), который может принимать объект - data_08 и на основе его генерировать список (ol, или ul). Реализуйте свойство type, которое может принимать строку или 'ul' или 'ol', свойство по умолчанию равно 'ul'. Внесите необходимые изменения в конструктор и метод render(). Сделайте так, что свойство type необязательное.

// тут пишем класс
class List_08 {
    type?: string;
    data: string[];

    constructor({ type, data }: { type?: string, data: string[] }) {
        this.type = type;
        this.data = data;

    };

    render(): HTMLUListElement {
        let ulElem = document.createElement(this.type) as HTMLUListElement;
        for (let item of this.data) {
            let liElem = document.createElement(this.type) as HTMLLIElement;
            liElem.textContent = item;
            ulElem.appendChild(liElem);

        }
        return ulElem;


    }
}
// Для проверки кода снимите комментарий ниже
const data_08 = {
    data: ['Нужно работать, а не вспоминать.', 'Даже у оружия нервы не в порядке.'],
    type: 'ol'
}

const ul_08 = new List_08(data_08);
console.log(ul_08);
document.querySelector('.out-8').append(ul_08.render());


// Task 09
// Создайте класс List_09, который содержит поля (свойства) data и cssClass - оба массивы string. Реализуйте конструктор и метод render(), который возвращает список ul созданный на базе полученных данныx, и данный список ul содержит классы CSS указанные в свойстве cssClass.

// тут пишем класс
class List_09 {
    data: string[];
    css: string[];
    constructor({ data, css }: { data: string[], css: string[] }) {
        this.data = data;
        this.css = css;
    }


    render(): HTMLUListElement {
        let ulElem = document.createElement('ul') as HTMLUListElement;
        this.css.forEach(elem => ulElem.classList.add(elem));
        for (let item of this.data) {
            let liElem = document.createElement('li') as HTMLLIElement;
            liElem.textContent = item;
            ulElem.append(liElem);
        }
        return ulElem;
    }
}

// Для проверки кода снимите комментарий ниже
const data_09 = {
    data: ['Jack Harper', 'Julia', 'Victoria', 'Kara'],
    css: ['text-orange', 'bold']
}

const ul_09 = new List_09(data_09);
console.log(ul_09);
document.querySelector('.out-9').append(ul_09.render());

// Task 10
// Создайте класс ModernString, содержащий свойство data - строка. Создайте конструктор, который будет заполнять данное свойство. Создайте метод after, который может принять строку и добавить в конец строки записанной в свойстве data (свойство data изменяется). Метод должен возвращать новое свойство data. Создайте метод before, который может принять строку и добавить в начало строки записанной в свойстве data (свойство data изменяется). Метод должен возвращать новое свойство data.

// тут пишем класс
class ModernString {
    data: string;
    constructor(data: string) {
        this.data = data;
    }
    after(str: string): string {
        str = this.data.concat(str);
        this.data = str
        return str;
    }
    before(str: string): string {
        str = str.concat(this.data);
        this.data = str
        return str;

    }
}
// Для проверки кода снимите комментарий ниже
const s_10 = new ModernString('cd');
console.log(s_10);
console.log(s_10.after('ef')); // ожидаю cdef
console.log(s_10.before('ab')); // ожидаю abcdef


// Task 11
// Класс может содержать только метод. Создайте класс ConsoleMessage, который содержит только метод void, метод выводит в консоль то, что принимает в качестве аргумента. Имя метода - say.

// тут пишем класс
class ConsoleMessage {
    say(a: number | string): void {
        console.log(a);

    }
}

// Для проверки кода снимите комментарий ниже
const m_11 = new ConsoleMessage();
console.log(m_11);
m_11.say('hello');

// Task 12
// Создайте класс Cart, который содержит только один метод total (возвращает число), метод может принять массив goods (смотрите сам объект) и возвращает сумму товаров в нем.

// тут пишем класс
class Cart {
    total(goodsArr: { articul: string, price: number, amount: number }[]): number {
        let cartCounter: number = 0;
        for (let item of goodsArr) {
            cartCounter += item.amount
        }
        return cartCounter;

    }
}

// Для проверки кода снимите комментарий ниже
const goods: { articul: string, price: number, amount: number }[] = [
    { articul: 'mon234', price: 3600, amount: 3 },
    { articul: 'lap839', price: 43400, amount: 2 },
    { articul: 'ups002', price: 980, amount: 1 },
];

let cart_01 = new Cart();
console.log(cart_01.total(goods));

// Task 13
// Создайте класс CellOperator, который содержит свойство code - string, свойство задается при создании объекта и метод operator(), который возвращает название оператора в зависимости от кода. Для определения оператора воспользуйтесь таблицей ниже. Если оператор не найден - возвращается пустая строка.
let operators: { Vodafone: string[], Life: string[], Kyivstar: string[] } = {
    Vodafone: ['050', '066', '095', '0999'],
    Life: ['063', '073', '093'],
    Kyivstar: ['067', '068', '096', '097', '098']
};

// тут пишем класс
class CellOperator {
    code: string;
    constructor(code: string) {
        this.code = code;
    }
    operator(): string {
        for (let operator in operators) {
            for (let key of operators[operator]) {
                if (key === this.code) {
                    return operator
                }
            }

        }
        return '';

    }
}
// Для проверки кода снимите комментарий ниже

let cell_01 = new CellOperator('093');
console.log(cell_01.operator()); // Ожидаю Life


// Task 14
// Создайте класс CellPhone в который скопируйте код из CellOperator. Добавьте свойство phone тип string. Измените конструктор так, чтобы он принимал номер телефона в виде строки '+380730010113' после чего разделял данную строку на части. В свойство code класса заносился код - символі 073 для данного номера, а в свойство phone - символы 0010113. Метод operator не меняем.

// тут пишем класс
class CellPhone {
    code: string;
    phone: string;
    constructor(phone: string) {
        this.code = phone.slice(3, 6);
        this.phone = phone.slice(6);
    }
    operator(): string {
        for (let operator in operators) {
            for (let key of operators[operator]) {
                if (key === this.code) {
                    return operator
                }
            }

        }
        return '';
    }
}

// Для проверки кода снимите комментарий ниже

let cell_02 = new CellPhone('+380730010113');
console.log(cell_02);

// Task 15
// Создайте класс Palindrome, который принимает в конструкторе строку и записывает в свойство str. Напишите метод check(), который заносит в свойство isPalindrome (по умолчанию false) true, если строка в str является палиндромом, и false если не является.

// тут пишем класс

class Palindrome {
    str: string;
    isPalindrome: boolean

    constructor(str: string, isPalindrome: boolean = false) {
        this.str = str;
        this.isPalindrome = isPalindrome
    }


    check(): boolean {
        let reversedStr = this.str.split('').reverse().join('');
        return this.isPalindrome = this.str === reversedStr;


    }
}
// Для проверки кода снимите комментарий ниже

let pal_01 = new Palindrome('sos');
pal_01.check();
console.log(pal_01.isPalindrome); // ожидаю true