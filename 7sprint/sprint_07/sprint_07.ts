// Task 01
// Создайте enum с именем WebExt содержащий расширения файлов для изображений в веб - PNG, JPEG, GIF, WEBP. Расширения писать в верхнем регистре. Числовые значения для расширений не вводить. Выведите в консоль для проверки.

import { Console } from "console";

enum WebExt {
    PNG,
    JPEG,
    GIF,
    WEBP
}
console.log(WebExt)

// Task 02
// Создайте enum с именем Days, содержащий названия дней недели: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. При этом Monday соответствует число 1, Tuesday число 2 и т.д. Выведите в консоль.

enum Days {
    Monday = 1,
    Thuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(Days)

// Task 03
// Создайте enum с именем CardinalPoints содержащий стороны света: north, south, east, west. Для каждой стороны задайте число north - 12, east - 3, south - 6, west - 9. Выведите в консоль.
enum CardinalPoints {
    north = 12,
    south = 3,
    east = 6,
    west = 9
}

console.log(CardinalPoints)


// Task 04
// Создан enums Data_04. Напишите функцию f04, которая получает keys из Data_04 с помощью Object.keys и выводит в .out-4 через пробел. Числовые данные должны быть отфильтрованы.

enum Data_04 {
    Alex,
    Steve,
    Valorie,
    Hex
}

const f04 = (): void => {
    let out = '';
    let str = Object.keys(Data_04)
        .filter(key => isNaN(Number(key)))
        .forEach(item => out += item + ' ');
    console.log(out)
    document.querySelector('.out-4').textContent = out;
}

document.querySelector('.b-4').addEventListener('click', f04);


// Task 05
// Создан enum Wolves. Напишите функцию f05, которая возвращает текстовые характеристики волка в виде массива.

enum Wolves {
    "Intense speed" = 5,
    "Intelligence" = 3,
    "Teleportation" = 2,
    "Bite" = 10
}

const f05 = (): string[] => {
    let wolvesData = Object.keys(Wolves)
        .filter(item => isNaN(Number(item)))
    return wolvesData;
}

document.querySelector('.b-5').addEventListener('click', (): void => {
    console.log(f05());
});


// Task 06
// Создан enum TrafficLight, напишите функцию, которая возращает сокращенное название цветов в виде массива. 

enum TrafficLight {
    Green = "G",
    Yellow = "Y",
    Red = "R"
}

const f06 = (): string[] => {
    console.log(TrafficLight)
    let gyrArr: string[] = [];
    Object.keys(TrafficLight)
        .forEach(item => gyrArr.push(TrafficLight[item]));


    return gyrArr;
}

document.querySelector('.b-6').addEventListener('click', (): void => {
    console.log(f06());
});

// Task 07
// Создайте enum с названием TsTypes, где перечисляются типы данных: number, string, boolean и им соответствуют сокращения num, str, bool. Выведите в консоль.

enum TsTypes {
    number = 'num',
    string = 'str',
    boolean = 'bool'
}
console.log(TsTypes)


// Task 08
// Создайте enum Time которая содержит перечисление hr, min, sec, AM, PM и соответствующее им значения hour, minute, second, Ante Meridiem, Post Meridiem. Выведите в консоль.

enum Time {
    hr = 'hour',
    min = 'minute',
    sec = 'second',
    AM = 'Ante Meridiem',
    PM = 'Post Meridiem'
}
console.log(Time)

// Task 09
// Создайте функцию, которая принимает аргумент типа TsTypes, и возвращает, если number - число 1, если string то строку '1', если boolean то true. Тип данных функции укажите самостоятельно.

// enum TsTypes

const f09 = (a: string): string | boolean | number => {

    if (typeof a === 'number') {
        return 1;
    } else if (typeof a === 'string') {
        return '1';
    } else if (typeof a === 'boolean') {
        return true;
    }


}

document.querySelector('.b-9').addEventListener('click', (): void => {
    console.log(f09(TsTypes.boolean));
});

// Task 10
// Создайте enum Roles, содержащий ключи admin со значением 1, writer со значением 5, и user со значением 10. Напишите функцию f10, которая может принимать аргумент - тип Roles и если переданная роль admin или writer то возвращает true, в противном случае - false.

enum Roles {
    admin = 1,
    writer = 5,
    user = 10
}

const f10 = (a: number): boolean => {
    return a === 1 || a === 5 ? true : false

}

document.querySelector('.b-10').addEventListener('click', (): void => {
    console.log(f10(Roles.writer));
});
