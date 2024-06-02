"use strict";
function lastElement(arr) {
    return arr[arr.length - 1];
}
const arr1 = [1, 2, 3, 4];
const arr2 = ['balu', 'malu', 'mall'];
console.log(lastElement(arr1));
console.log(lastElement(arr2));
///////////////
function includes(arr, el) {
    return arr.includes(el);
}
console.log(includes(arr1, 22));
console.log(includes(arr2, 'balu'));
///////> < 5 > 6
function more(item_1, item_2) {
    return (item_1 > item_2) ? item_1 : item_2;
}
console.log(more('aba', 'mao'));
console.log(more(1, 5));
function render(elem, arr) {
    let out = '';
    if (elem) {
        for (let i = 0; i < arr.length; i++) {
            out += arr[i].toString() + '_';
        }
        elem.textContent = out;
    }
}
render(document.querySelector('.out-1'), arr1);
render(document.querySelector('.out-2'), arr2);
///
function arrayEqual(mass1, mass2) {
    if (mass1.length != mass2.length)
        return false;
    for (let i = 0; i < mass1.length; i++) {
        if (mass1[i].toString() !== mass2[i].toString()) {
            return false;
        }
    }
    return false;
}
console.log(arrayEqual([22, 33], [22, '333']));
console.log(arrayEqual(['22', 33], [22, '333']));
console.log(arrayEqual([true, false], [22, 'false']));
//echo;
function echo(x) {
    return x;
}
;
function merge(ar1, ar2) {
    const result = [];
    result.push(...ar1, ...ar2);
    return result;
}
console.log(merge([1, 2, 3], [555]));
console.log(merge(['app'], ['555']));
//# sourceMappingURL=script.js.map