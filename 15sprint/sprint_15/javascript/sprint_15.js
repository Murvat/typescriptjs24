"use strict";
// Task 01
// Интерфейсы в TS могут выполнять функцию описания структуры объектов, создавать кастомизированные типы. Давайте сделаем несколько примеров.
// Создайте интерфейс IGoods, который описывает свойства title - string, amount - number, color - string (не обязательный).
//  Создайте объект реализующий данный интерфейс. Проверьте работу и закомментируйте код проверки.
const obj1 = {
    title: 'Car',
    amount: 8
};
// реализуйте объект на основе интерфейса IUser и выведите в консоль. Проверьте работу и закомментируйте код проверки.
const obj2 = {
    id: 5,
    username: 'Murvat',
    password: 'mmm1009',
    hash: 'adsmasdmasdasodimasd',
    created: 2019,
};
const obj_31 = {
    message_id: 32546,
    user_id: 25654,
    username: 'Скринька Пандори',
    time: '2024-01-31 17:45:25',
    body: 'Країни ЄС цього року нададуть...'
};
const obj_32 = {
    message_id: 3876214,
    user_id: 657412,
    username: 'ITGid - info',
    time: '2024-01-29 08:25:15',
    body: 'Небольшой анонс на сегодня...'
};
const clock = {}; // не изменяйте данную строку.
// тут заполните объект сlock, установите 21 час, 31 минута и 59 секунд.
clock.h = 21;
clock.m = 31;
clock.s = 59;
// реализуйте объект на основе интерфейса IStore и выведите в консоль. Проверьте работу и закомментируйте код проверки.
const obj05 = {
    title: 'phone',
    amount: 1099,
    size: [35, 15]
};
// реализуйте объект на основе интерфейса IBigStore и выведите в консоль. Проверьте работу и закомментируйте код проверки.
const obj06 = {
    title: 'phone',
    amount: 1099,
    size: [35, 15],
    color: ['blue', 'red', 'green']
};
// реализуйте объект на основе интерфейса ICart, методы пропишите условно. Проверьте работу и закомментируйте код проверки.
const obj_07 = {
    id: 5,
    addToCart() {
        return this.id;
    },
    clearCart() {
        console.log(this.id);
    },
};
// Для проверки создайте объект rect_01 на базе интерфейса IRect, задайте размеры и реализуйте area(). После проверки - закомментируйте объект.const
const rect_01 = {
    a: 1,
    b: 2,
    area(a, b) {
        return a * b;
    }
};
console.log(rect_01.area(5, 10));
// Task 09
// Создадим абстрактный класс, ARect, который описывает геометрическую фигуру. Абстрактный класс содержит два абстрактных свойства a, b (числа) и метод area (не абстрактный), который возвращает this.a * this.b - число.
// Обратите внимание - мы реализовали метод в абстрактном классе, в интерфейсе реализация невозможна.
// Тут создайте абстрактный класс
class ARect {
    area() {
        return this.a * this.b;
    }
    ;
}
// Task 10
// Повторим то, что прошли. Создайте на основе абстрактного класса ARect класс Rectangular. Добавьте конструктор, который принимает два числа и заполняет свойства a, b. Создайте на базе класса объект со сторонами 0.5 и 20 и выведите полученную площадь в консоль. После проверки - закомментируйте код создания объекта.
// Тут создайте абстрактный класс Rectangular
class Rectangular extends ARect {
    a;
    b;
    constructor(num1, num2) {
        super();
        this.a = num1;
        this.b = num2;
    }
}
const obj_10 = new Rectangular(0.5, 20);
console.log(obj_10.area());
// Тут создайте класс Paragraph c имплементацией свойств и методов интерфейса IElement. Пусть для проверки getWidth возвращает 0.
class Paragraph {
    tag = 'div';
    paired = true;
    text = 'asndjlandl';
    getWidth() {
        return 0;
    }
}
// Task 14
// Создайте класс Rect, который имплементирует интерфейсы IFigureA, IFigureB и реализует методы getSquare, getPerimeter. 
class Rect {
    a;
    b;
    constructor(num1, num2) {
        this.a = num1;
        this.b = num2;
    }
    getSquare() {
        return this.a * this.a;
    }
    getPerimeter() {
        return (this.a + this.b) * 2;
    }
}
// Для проверки, на базе класса создайте объект obj_14, со сторонами 5 и 4 и выведите его площадь и периметр. 
const obj_14 = new Rect(5, 4);
console.log(obj_14.getSquare());
console.log(obj_14.getPerimeter());
// Task 15
// Создан Абстрактный класс AExample. Напишите интерфейс IExample, который соответствует его структуре.
class AExample {
    src = '';
    format;
    alt = '';
    title = '';
    width = 100;
    widthUnits = '%';
    render() {
        const img = document.createElement('img');
        img.src = this.src;
        img.alt = this.alt;
        img.title = this.title;
        img.style.width = this.width + this.widthUnits;
        return img;
    }
}
//# sourceMappingURL=sprint_15.js.map