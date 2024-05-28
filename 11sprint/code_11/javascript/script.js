"use strict";
class T01 {
    n1;
    n2;
    n3;
    constructor(a, b) {
        this.n1 = a;
        this.n2 = b;
    }
    max() {
        this.n3 = Math.max(this.n1, this.n2);
    }
}
const obj_01 = new T01(22, 15);
obj_01.max();
console.log(obj_01);
class T02 extends T01 {
    constructor(num1, num2) {
        super(num1, num2);
    }
    min() {
        this.max;
    }
}
const obj_02 = new T02(333, 33);
//# sourceMappingURL=script.js.map