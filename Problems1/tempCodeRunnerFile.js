function calc(meters) {
    let all = meters * 7.61;
    let disc = 0.18 * all;
    let finalP = all - disc;
    console.log('The final price is: ' + finalP + ' USD.');
    console.log('The discount is: ' + disc + ' USD.');

}
calc(150);