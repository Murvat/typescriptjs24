// Task 01
// Создайте массив чисел ar_1 содержащих элементы  77, 88, 99 в таком же порядке как указано. Тип укажите самостоятельно. Выведите в консоль.


const ar_1: number[] = [77, 88, 99];
console.log(ar_1)


// Task 02
// Создайте массив чисел ar_2 содержащих элементы 99, 100, 110 в таком же порядке как указано. Тип укажите самостоятельно. Выведите в .out-2 разделитель знак подчеркивания. В этой и далее задачах с разделителем приемлемым будет ответ и 99_100_110_ и 99_100_110.

const ar_2: number[] = [99, 100, 110];
let out: string = '';
for (let i = 0; i < ar_2.length; i++) {
    out += ar_2[i] + '_';
}
document.querySelector('.out-2').textContent = out;

// Task 03
// Создайте массив ar_3, состоящий из строк 'Hello', 'Hi', 'Trust'. Тип данных укажите самостоятельно. Напишите функцию, f03, которая фильтрует массив ar3, возвращая новый массив, в котором находятся элементы длиной не менее 4 символов.

const ar_3: string[] = ['Hello', 'Hi', 'Trust'];

function f03(a: string[]): string[] {
    let arr: string[] = a.filter(item => item.length > 4);
    return arr;

}

document.querySelector('.b-3').addEventListener('click', (): void => {
    document.querySelector('.out-3').textContent = f03(ar_3).join(' ');
});

// Task 04
// Создайте массив ar_4 состоящий из чисел. Заполните значениями самостоятельно. Напишите функцию f04, которая принимает массив как аргумент, и возвращает сумму элементов массива. Тип данных функции напишите самостоятельно.

const ar_4: number[] = [9, 5, 7, 2, 99, 53];


const f04 = (arr: number[]): number => {
    let num: number = arr.reduce((accum, currVal) => accum + currVal, 0)
    return num;
}
document.querySelector('.b-4').addEventListener('click', (): void => {
    document.querySelector('.out-4').textContent = String(f04(ar_4));
});


// Task 05
// Создайте функцию, которая выводит массив ar_5 в .out-5. Вывод осуществляйте циклом. Разделитель - дефис.

const ar_5: number[] = [];
ar_5[2] = 333;
ar_5[4] = 777;

const f05 = (): void => {
    let out: string = '';

    for (let item of ar_5) {
        out += item + '-';
    }
    document.querySelector('.out-5').textContent = out;
    console.log(out)


}
document.querySelector('.b-5').addEventListener('click', f05);




// Task 06
// Напишите функцию, f06, которая создает массив состоящий только из чисел массива ar_06 и возвращает его. 

const ar_06: (number | boolean)[] = [1, false, 2, true, 5, false];

const f06 = (): number[] => {
    let arrNew: number[] = [];
    for (let item of ar_06) {
        if (typeof item === 'number') {
            arrNew.push(item);
        }
    }
    return arrNew;
};


document.querySelector('.b-6').addEventListener('click', (): void => {
    document.querySelector('.out-6').textContent = f06().join('=');
});

// Task 07
// Создайте readonly массив ar_07 содержащий всего два значения true, false. Тип задайте самостоятельно. Выведите массив в консоль.

const ar_07: readonly boolean[] = [true, false];
console.log(ar_07)

// Task 08
// Создайте функцию, которая читает число из input.i-8 и если число четное, то делает его push в массив ar_08, если не четное то unshift в массив. Массив создайте глобально по отношению к функции. Результат - выводите в .out-8, разделитель - подчеркивание.

const ar_08: number[] = [];

const f08 = (): void => {
    let num: number = parseInt((<HTMLInputElement>document.querySelector('input.i-8')).value)
    num % 2 === 0 ? ar_08.push(num) : ar_08.unshift(num);
    let out: string = ''
    for (let item of ar_08) {
        if (!Number.isNaN(item))
            out += item + '-'
    }
    document.querySelector('.out-8').textContent = out;
}


document.querySelector('.b-8').addEventListener('click', f08);

// Task 09
// Создайте функцию, которая принимает целое число n как аргумент и возвращает массив длиной n наполненный случайными числами от 0 до 10.

const f09 = (n: number): number[] => {
    let arr: number[] = [];
    do {
        let randomNum: number = Math.floor(Math.random() * 10);
        arr.push(randomNum);
    } while (arr.length <= n);

    return arr;


}

document.querySelector('.b-9').addEventListener('click', (): void => {
    document.querySelector('.out-9').textContent = f09(4).join('_');
});

// Task 10
// Создайте функцию, которая принимает массив ar_10 и возвращает два массива, первый из которых содержит только четные числа из исходного массива, а второй только нечетные числа. 

const f10 = (arr: number[]): number[][] => {
    let resArray: number[][] = [[], []];
    for (let item of arr) {
        item % 2 === 0 ? resArray[0].push(item) : resArray[1].push(item)
    }
    return resArray;


}

document.querySelector('.b-10').addEventListener('click', (): void => {
    const ar_10: number[] = [22, 33, 44, 55, 66, 66, 88, 77];
    document.querySelector('.out-101').textContent = f10(ar_10)[0].join('_');
    document.querySelector('.out-102').textContent = f10(ar_10)[1].join('_');
});

// Task 11
// Создайте функцию, которая выводит в .out-11 одномерный массив ar_11. Если в массиве встречается число 1, то на выводе оно заменяется на 'X' - латинскую X в верхнем регистре. Разделитель - пробел.

const ar_11: number[] = [1, 0, 0, 0, 0];

const f11 = (): void => {
    let res: (string | number)[] = ar_11.map(item => item === 1 ? 'X' : item);
    let out: string = '';
    res.forEach(elem => out += elem + ' ');
    document.querySelector('.out-11').textContent = out;
}

document.querySelector('.b-11').addEventListener('click', f11);


// Task 12
// Создайте функцию, которая выводит в .out-12 одномерный массив ar_12. Если в массиве встречается число 1, то на выводе оно заменяется на 'X' - латинскую X в верхнем регистре. Разделитель - пробел. При нажатии кнопки значение 1 в массиве должно смещаться вправо, а старое положение заменять на 0. Положение единицы определяется счетчиком count. 

const ar_12: number[] = [1, 0, 0, 0, 0];
let count: number = 0;

const f12 = (): void => {
    if (count < ar_12.length) {
        if (ar_12[count] === 1) {
            ar_12[count] = 0;
            count === ar_12.length - 1 ? count = 0 : count++;
            ar_12[count] = 1;
        }
    }

    let res: (string | number)[] = ar_12.map(item => item === 1 ? 'X' : item);
    let out: string = '';
    res.forEach(elem => out += elem + ' ');
    document.querySelector('.out-12').textContent = out;
}
document.querySelector('.b-12').addEventListener('click', f12);

// Task 13
//  Создайте функцию которая в массиве ar_13 заменяет числа 1 на 0, а 0 на 1. Выводит массив на страницу, разделитель между элементами - пробел, разделитель между строками перенос строки.

const ar_13: number[][] = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
];

const f13 = (): void => {
    let out: string = ''
    for (let i = 0; i < ar_13.length; i++) {
        for (let j = 0; j < ar_13.length; j++) {
            if (ar_13[i][j] === 1) {
                ar_13[i][j] = 0
            } else if (ar_13[i][j] === 0) {
                ar_13[i][j] = 1
            }
            out += ar_13[i][j] + ' ';
        }
        out += '<br>'
    }
    (<HTMLElement>document.querySelector('.out-13')).innerHTML = out;
}

document.querySelector('.b-13').addEventListener('click', f13);

// Task 14
// Создайте кортеж k14 тип данных string, string и заполните его 'type', 'script'. Для проверки выведите в консоль.

const k14: [string, string] = ['type', 'script'];
console.log(k14);


// Task 15
// Создайте кортеж k15 тип данных number, number и заполните его числами 77, 99. Для проверки выведите в консоль.

const k15: [number, number] = [77, 99];
console.log(k15);

// Task 16
// Создан кортеж k16. Напишите функцию, которая меняет в нем числа - добавляет к каждому числу по 10 и выводит в .out-16 сумму элементов кортежа.

const k16: [number, number] = [77, 88];

const f16 = (): void => {
    let arr: number[] = k16.map(elem => elem += 10);
    let numSum = arr.reduce((accum, currVal) => accum + currVal, 0);
    document.querySelector('.out-16').textContent = String(numSum)
}


document.querySelector('.b-16').addEventListener('click', f16);


// Task 17
// Создан кортеж k17. Напишите функцию, которая выводит в .out-17 сумму элементов кортежа. Обратите внимание - количество элементов кортежа при проверке может меняться. 

let k17: [...number[]] = [2, 2, 3, 4];

const f17 = (): void => {
    let sum = k17.reduce((accum, initVal) => accum + initVal, 0)
    document.querySelector('.out-17').textContent = String(sum)
}

document.querySelector('.b-17').addEventListener('click', f17);



// Task 18
// Создан кортеж k18 readonly тип boolean, содержащий элемент true, false. Напишите функцию f18, которая выводит в .out-18 значения кортежа через пробел. Кортеж объявлен глобально по отношению к функции. 

let k18: readonly [boolean, boolean] = [true, false];

// тут создаете f18 стрелочную!!!
const f18 = (): void => {
    let out: string = '';
    k18.forEach(elem => out += elem + ' ')
    document.querySelector('.out-18').textContent = out;
}


document.querySelector('.b-18').addEventListener('click', f18);

// Task 19
// Создан кортеж k19 readonly тип boolean, содержащий элемент true, false. Напишите функцию f19, которая выводит в .out-19 длину кортежа. Кортеж объявлен глобально по отношению к функции. 

let k19: readonly [boolean, boolean] = [true, false];

// тут создаете f19 стрелочную!!!
const f19 = (): void => {
    document.querySelector('.out-19').textContent = String(k19.length)
}

document.querySelector('.b-19').addEventListener('click', f19);

// Task 20
// Создайте кортеж k20, содержащий массив чисел [2, 3]. Выведите в консоль.

const k20: [number, number] = [2, 3];
console.log(k20);