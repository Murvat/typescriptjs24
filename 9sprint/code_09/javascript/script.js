"use strict";
//class annauncement
class Button {
    text;
    className;
}
const b_01 = new Button();
b_01.text = 'Push me';
b_01.className = ['btn', 'btn-success'];
console.log(b_01);
//implementation data into class;
class Header {
    text = 'Header 1';
    fontSize = '24px';
}
const h_01 = new Header();
console.log(h_01);
//Methods
class Btn {
    text;
    className;
    create() {
        const button = document.createElement('button');
        button.textContent = this.text;
        this.className.forEach(item => button.classList.add(item));
        return button;
    }
}
const b_02 = new Btn();
console.log(b_02);
b_02.text = 'Button';
b_02.className = ['btn', 'btn-success'];
console.log(b_02);
console.log(b_02.create());
document.body.append(b_02.create());
b_02.text = 'Button';
b_02.className = ['btn', 'btn-warning'];
document.body.append(b_02.create());
//constructor
class ButtonElement {
    text;
    className;
    role;
    constructor(text, className) {
        this.text = text;
        this.className = className;
        this.role = 'button';
    }
    create() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.setAttribute('role', this.role);
        this.className.forEach(item => button.classList.add(item));
        return button;
    }
}
const b_03 = new ButtonElement('Push me', ['btn', 'btn-primary']);
console.log(b_03);
document.body.append(b_03.create());
const b_04 = new ButtonElement('new Button', ['btn', 'btn-warning']);
document.body.append(b_04.create());
///sprint
class Sprint {
    id;
    courseId;
    url;
    order;
    pay;
    blank;
    code;
    points;
    lang;
    title;
    text;
    video;
    time;
}
// const sprint = new Sprint(obj);
//# sourceMappingURL=script.js.map