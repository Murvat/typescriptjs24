
function lastElement<T>(arr: T[]): T {
    return arr[arr.length - 1];

}
const arr1: number[] = [1, 2, 3, 4];
const arr2: string[] = ['balu', 'malu', 'mall'];


console.log(lastElement(arr1));
console.log(lastElement(arr2));
///////////////

function includes<T>(arr: T[], el: T): boolean {
    return arr.includes(el);
}

console.log(includes(arr1, 22))
console.log(includes(arr2, 'balu'))
///////> < 5 > 6

function more<T>(item_1: T, item_2: T): T {
    return (item_1 > item_2) ? item_1 : item_2;
}

console.log(more('aba', 'mao'))
console.log(more(1, 5))

function render<T>(elem: HTMLElement, arr: T[]): void {
    let out: string = '';
    if (elem) {
        for (let i: number = 0; i < arr.length; i++) {
            out += arr[i].toString() + '_';
        }
        elem.textContent = out;
    }
}

render(document.querySelector('.out-1'), arr1);
render(document.querySelector('.out-2'), arr2);


///

function arrayEqual<T, S>(mass1: T[], mass2: S[]): boolean {
    if (mass1.length != mass2.length) return false;
    for (let i: number = 0; i < mass1.length; i++) {
        if (mass1[i].toString() !== mass2[i].toString()) {
            return false;
        }
    }
    return false;
}
console.log(arrayEqual([22, 33], [22, '333']))
console.log(arrayEqual(['22', 33], [22, '333']))
console.log(arrayEqual([true, false], [22, 'false']))


//echo;

function echo<T>(x: T): T {
    return x;
};

function merge<U>(ar1: U[], ar2: U[]): U[] {
    const result = [];
    result.push(...ar1, ...ar2);
    return result;
}

console.log(merge([1, 2, 3], [555]));
console.log(merge(['app'], ['555']));

