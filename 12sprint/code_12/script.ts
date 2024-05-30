// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//         z.push(i * x);
//     }
//     return z;
// }
// countBy(2, 5)
// function countPositivesSumNegatives(input) {
//     let countOfPositive = 0;
//     let sumOfNegatives = 0;
//     let res = []
//     if (input === null || input === undefined || !Array.isArray(input) || input.length === 0) {
//         return [];
//     } else {
//         for (let i = 0; i < input.length; ++i) {

//             if (input[i] > 0) {
//                 console.log(input[i])
//                 countOfPositive++;
//             } else if (input[i] < 0) {
//                 sumOfNegatives += input[i];
//             }

//         }

//         res.push(countOfPositive);
//         res.push(sumOfNegatives)
//         return res;
//     };
// // }
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let arr2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// console.log(countPositivesSumNegatives(arr2));