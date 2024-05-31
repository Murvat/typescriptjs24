"use strict";
// Task 01
// Пример из реального фреймворка
// Создан абстрактный класс SignupFormAbstract. Создайте на его основе класс SignupForm (не применяйте конструктор), который реализует свойства и методы абстрактного класса .Для метода validatePassword - реализуйте удаление пробелов по краям и вычисление длины.Если длина меньше 8 символов, возвращайте false, в остальных случаях - true.Значений свойств по умолчанию - пустые строки. 
class SignupFormAbstract {
}
// Тут создаете класс SignupForm
class SignupForm extends SignupFormAbstract {
    username = '';
    email = '';
    password = '';
    validatePassword(password) {
        let passLen = password.trim().length;
        return passLen < 8 ? false : true;
    }
}
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// let obj1 = new SignupForm();
// obj1.email = 'murvat@gmail.com';
// obj1.password = ' MurvatM555       ';
// obj1.username = 'm555';
// console.log(obj1);
// console.log(obj1.validatePassword(obj1.password))
// Task 02
// Создан абстрактный класс SignupFormAbstract. Создайте на его основе класс SignupForm_02, который реализуем свойства и методы абстрактного класса.
//Для метода validatePassword - реализуйте удаление пробелов по краям и вычисление длины.Если длина меньше 8 символов, возвращайте false, в остальных случаях - true.Значений свойств по умолчанию - пустые строки.Реализуйте в классе конструктор, который задает значения username, email, password при создании объекта.
// Тут создаете класс SignupForm_02
class SignupForm_02 extends SignupFormAbstract {
    email;
    username;
    password;
    constructor(email, username, password) {
        super();
        this.email = email;
        this.username = username;
        this.password = password;
    }
    validatePassword(password) {
        let passLen = password.trim().length;
        return passLen < 8 ? false : true;
    }
}
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
console.log(new SignupForm_02('abba', 'abba@email.ua', '234'));
// Task 03
// Пример из реального фреймворка
// Создайте абстрактный класс CF. Класс содержит абстрактные поля name, email, subject, body, verifyCode все string, и абстрактный метод sendEmail, который принимает аргумент email, тип метода boolean.
// Тут создаете класс CF
class CF {
}
// Task 04
// Создайте класс ContactForm на основе класса CF. Свойства реализуйте как пустые строки, добавьте класс конструктор, который позволяет заполнить свойства name, email, subject, body, verifyCode при создании объекта. Метод sendEmail, реализуйте как функцию, возвращающую true.
// Тут создаете класс ContactForm
class ContactForm extends CF {
    name = '';
    email = '';
    body = '';
    subject;
    verifyCode = '';
    constructor(email, name, body, subject, verifyCode) {
        super();
        this.email = email;
        this.name = name;
        this.body = body;
        this.subject = subject;
        this.verifyCode = verifyCode;
    }
    sendEmail(email) {
        return true;
    }
}
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
console.log(new ContactForm('murvat@mail.com', 'Murvat', 'Mustafayev', 'Engineer', '343'));
// Task 05
// Пример из реального фреймворка
// Создайте абстрактный класс User, который содержит абстрактные свойства id - number, username - string, email - string, status - number. Напишите абстрактный метод findByUsername, который принимает имя пользователя - username, и возвращает id пользователя или false.
// Тут создаете класс User
class User {
}
// Task 06
// Создайте на основе абстрактного класса User класс Client, где реализуйте все необходимые свойства и методы. По умолчанию числовые значения равны 0, строковые пустой строке. Метод должен возвращать 0. Не применяйте конструктор.
// Тут создаете класс Client
class Client extends User {
    id = 0;
    status = 0;
    username = '';
    email = '';
    findByUsername(username) {
        return 0;
    }
}
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
// let obj_6 = new Client();
// console.log(obj_6.email = 'asdds@mail.com');
// console.log(obj_6.username = 'asdds');
// console.log(obj_6.status = 404);
// console.log(obj_6.id = 4);
// console.log(obj_6.findByUsername('asda'))
// console.log(obj_6)
// Task 07
// Пример из реального фреймворка
// Реализуйте абстрактный класс ArticleInstance содержащий абстрактные свойства:
// number article_id
// number author_id
// string language
// number created
// number updated
// string published
// number hits_count
// string intro_text
// string full_text
// string title
// string meta_keywords
// string meta_description
// Добавьте два readonly свойства общие для всех классов наследников PUBLISHED_YES = 'Yes', ;
// Тут создаете класс ArticleInstance
class ArticleInstance {
    PUBLISHED_YES = 'Yes';
    PUBLISHED_NO = 'No';
}
// Task 08
// Создайте на основе абстрактного класса ArticleInstance класс Article, где реализуйте все необходимые свойства и методы. По умолчанию числовые значения равны 0, строковые пустой строке. Не применяйте конструктор.
// Тут создаете класс Article
class Article {
    article_id = 0;
    author_id = 0;
    language = '';
    created = 0;
    updated = 0;
    published = '';
    hits_count = 0;
    intro_text = '';
    full_text = '';
    title = '';
    meta_keywords = '';
    meta_description = '';
}
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
console.log(new Article());
// Task 09
// Пример из реального фреймворка
// Создайте абстрактный класс BundleCSS, содержащий абстрактные свойства:
// sourcePath - строка
// basePath - строка
// baseUrl - строка
// depends - массив строк
// сssOptions - массив строк
// Добавьте абстрактный метод init, void.
// Добавьте абстрактный метод publish, void.
// Тут создаете класс BundleCSS
class BundleCSS {
}
// Task 10
// Создайте на базе BundleCSS класс CssBundle, реализуйте свойства и методы. Задайте начальные значения для строк и массивов (пустые строки, пустые массивы). Не применяйте конструктор.
// Тут создаете класс CssBundle
class CssBundle extends BundleCSS {
    sourcePath = '';
    basePath = '';
    baseUrl = '';
    depends = [];
    cssOptions = [];
    init() {
    }
    ;
    publish() {
    }
    ;
}
// Проверку созданного класса реализуйте самостоятельно. После проверки - удалите или комментируйте.
console.log(new CssBundle());
//# sourceMappingURL=sprint_13.js.map