class T01 {
    public n1: number;
    public n2: number;
    private n3: number;
    constructor(a: number, b: number) {
        this.n1 = a;
        this.n2 = b;
    }
    max(): void {
        this.n3 = Math.max(this.n1, this.n2)
    }
}

const obj_01 = new T01(22, 15);
obj_01.max();
console.log(obj_01);

class T02 extends T01 {
    constructor(num1: number, num2: number) {
        super(num1, num2);
    }

    min() {
        this.maxNum = 5;
    }
}

const obj_02 = new T02(333, 33)