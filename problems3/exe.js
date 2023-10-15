
// function checkNum(number) {
//     switch (number) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("Error");
//             break;
//     }
// }

// checkNum(4);


// function checkDay(day) {
//     day = day.toLowerCase()
//     switch (day) {
//         case "monday":
//         case "tuesday":
//         case "wednesday":
//         case "thursday":
//         case "friday":
//             console.log("Working day");
//             break;
//         case "saturday":
//         case "sunday":
//             console.log("Weekend");
//             break;
//         default:
//             console.log("Error");
//             break;
//     }
// }
// checkDay("monday")


// function checkType(animal) {
//     switch (animal) {
//         case "dog":
//             console.log("mammal");
//             break;
//         case "crocodile":
//         case "tortoise":
//         case "snake":
//             console.log("reptile");
//             break;
//         default:
//             console.log("unknown");
//             break;
//     }
// }
// checkType("dog")


// function personalTitles(age, gender) {
//     age = Number(age);
//     if (gender === "m") {
//         if (age < 16) {
//             console.log("Master");
//         } else {
//             console.log("Mr.");
//         }
//     } else {
//         if (age < 16) {
//             console.log("Miss");
//         } else {
//             console.log("Mrs.");
//         }
//     }
// }

// personalTitles(12, "m");

// function calculateProductCost(product, city, quantity) {
//     const priceTable = {
//         coffee: {
//             London: 0.50,
//             Rome: 0.40,
//             Paris: 0.45,
//         },
//         water: {
//             London: 0.80,
//             Rome: 0.70,
//             Paris: 0.70,
//         },
//         beer: {
//             London: 1.20,
//             Rome: 1.15,
//             Paris: 1.10,
//         },
//         sweets: {
//             London: 1.45,
//             Rome: 1.30,
//             Paris: 1.35,
//         },
//         peanuts: {
//             London: 1.60,
//             Rome: 1.50,
//             Paris: 1.55,
//         },
//     };

//     // Check if the product and city are in the price table
//     if (priceTable[product] && priceTable[product][city] !== undefined) {
//         const cost = priceTable[product][city] * quantity;
//         console.log(cost.toFixed(1));
//     }
// }

// // Example usage:
// calculateProductCost("sweets", "London", 2.23);


// function checkNumber(Num) {
//     if (Num > -100 && Num < 100 && Num !== 0) {
//         console.log("Yes");
//     } else if (Num === 0) {
//         console.log("No");
//     } else {
//         console.log("No");
//     }
// }

// checkNumber(1000);



const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'problems3/exe.js');

try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}

