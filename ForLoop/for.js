// function num1to100() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }

// function solve(num) {
//     for (let i = num; i > 0; i--) {
//         console.log(i)
//     }
// }
// solve(5);

// function solve2(num) {
//     for (let i = 1; i <= num; i += 3) {
//         console.log(i);
//     }
// }
// solve2(10);

// function solve3(num) {
//     for (let i = 0; i <= num; i += 2) {
//         let power = 2 ** i;
//         console.log(power);
//     }
// }
// solve3(7);

// function solve4(text) {
//     for (let i = text.length - 1; i >= 0; i--) {
//         let letter = text[i];
//         console.log(letter)
//     }
// }
// solve4('Hello');

// function solve4(text) {
//     for (let i = 0; i < text.length; i++) {
//         let letter = text[i];
//         console.log(letter)
//     }
// }
// solve4('Hello');


// function Sum(text) {
//     const vowelValues = {
//         "a": 1,
//         "e": 2,
//         "i": 3,
//         "o": 4,
//         "u": 5
//     };
//     let sum = 0;
//     for (let i = 0; i < text.length; i++) {
//         const char = text[i].toLowerCase();
//         if (vowelValues[char]) {
//             sum += vowelValues[char];
//         }
//     }
//     console.log(sum);
// }
// Sum("hello");


// function solve(n) {
//     n = Math.abs(n);
//     let sum = 0;
//     const nString = n.toString();

//     for (let i = 0; i < nString.length; i++) {
//         const digit = parseInt(nString[i], 10);
//         sum += digit;
//     }

//     console.log('The sum of the digits is:' + sum);
// }

// // Call the function with your integer
// solve(12345); // Change the argument to your integer

function solve(n) {
    n = Math.abs(n);
    let sum = 0;
    const nString = n.toString();

    for (let i = 0; i < nString.length; i++) {
        const digit = parseInt(nString[i], 10);
        sum += digit;
    }
    return sum;
}
console.log('The sum of the digits is:' + result);
const result = solve(12345);