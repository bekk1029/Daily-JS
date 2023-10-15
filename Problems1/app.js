// function hello() {
//     console.log("Hello SoftUni")
// }

// hello()

// function nums1to10() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
//     console.log(6);
//     console.log(7);
//     console.log(8);
//     console.log(9);
//     console.log(10);
// }


// function squareArea(side) {
//     let area = side * side;
//     console.log(area);
// }

// function inchesToCm(inch) {
//     let cm = inch * 2.54;
// }
// inch(5);

// function greetings(name) {
//     console.log('Helle, ' + name + '!');
// }
// greetings('John Doe')

// function concatenate(firstName, lastName, age, town) {
//     console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
// }
// concatenate('Emma', 'Brown', 20, 'London')

// function projectCreation(architect, projects) {
//     hour = 3 * projects;
//     let result = `The architect ${architect} will need ${hour} hours to complete ${projects} project/s. `;
//     console.log(result);
// }

// projectCreation('Zara', 2);

// function calculate(dogPackages, catPackages) {
//     let dogPrice = 2.50 * dogPackages;
//     let catPrice = 4 * catPackages;
//     let totalSum = (dogPrice + catPrice).toFixed(1);
//     console.log(totalSum + ' USD.')
// }
// calculate(5, 4);

function calc(meters) {
    let all = meters * 7.61;
    let disc = 0.18 * all;
    let finalP = all - disc;
    console.log('The final price is: ' + finalP + ' USD.');
    console.log('The discount is: ' + disc + ' USD.');

}
calc(150);
