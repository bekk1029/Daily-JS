// function convertor(dollars) {
//     var result = dollars * 0.81545;
//     console.log(result);
// }
// convertor(22);

// function radToDeg(radians) {
//     var degrees = radians * (180 / Math.PI);
//     return degrees;
// }
// console.log(radToDeg(3.1416));

// function depCalc(depositedAmount, term, rate) {
//     let amount = (depositedAmount + (depositedAmount * (rate / 100) / 12) * term);
//     console.log(amount);
// }
// depCalc(2350, 6, 7);

// function calce(currentPages, pagePerHour, days) {
//     let totalHours = currentPages / pagePerHour / days;
//     console.log(totalHours);

// }

// console.log(calce(212, 20, 2));

// function calc2(penPackets, markerPackets, boardCleanerLiters, discountPercentage) {
//     const penPrice = 5.80;
//     const markerPrice = 7.20;
//     const boardCleanerPrice = 1.20;
//     let priceForPenAndMarkerandboard = (penPackets * penPrice) + (markerPackets * markerPrice) + (boardCleanerLiters * boardCleanerPrice);
//     let pricewithdiscount = priceForPenAndMarkerandboard - (priceForPenAndMarkerandboard * (discountPercentage / 100));
//     console.log(pricewithdiscount)
// }
// calc2(2, 3, 4, 25);

// function calc3(nylon, paint, thinner, hour) {
//     const pricenylon = 1.50;
//     const pricepaint = 14.50;
//     const pricethinner = 5.00;
//     const bag = 0.40;
//     let pricematerials = ((nylon + 2) * pricenylon) + ((paint + (paint * 0.1)) * pricepaint) + (thinner * pricethinner) + bag;
//     let amount = (pricematerials * 0.3) * hour;
//     let total = pricematerials + amount;
//     console.log(total);


// }
// calc3(5, 10, 10, 1);


// function calc4(chicken, fish, vegatarian) {
//     const chickenmenu = 10.35;
//     const fishmenu = 12.40;
//     const vegatarianmenu = 8.15;
//     const delivery = 2.50;
//     let pricemenu = (chicken * chickenmenu) + (fish * fishmenu) + (vegatarian * vegatarianmenu);
//     let dessert = pricemenu * 0.2;
//     let finalprice = pricemenu + dessert + delivery;
//     console.log(finalprice);
// }
// calc4(2, 4, 3);

// function calc5(annFee) {
//     let pricesnrks = annFee - (annFee * 0.4);
//     let pricesuit = pricesnrks - (pricesnrks * 0.2);
//     let pricebball = pricesuit * 0.25;
//     let acc = pricebball * 0.2;
//     let total = annFee + pricesnrks + pricesuit + pricebball + acc;
//     console.log(total);
// }
// calc5(550);

function calc6(length, widht, height, percentage) {
    let aquarium = (length * widht * height) / 1000;
    let liters = aquarium * (1 - (percentage / 100));
    console.log(liters);
}
calc6(85, 75, 47, 17);