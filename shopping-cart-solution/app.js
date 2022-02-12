function updateProductNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (
        caseNumber > 0) {
        caseNumber = parseInt(
            caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    //update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = caseNumber * price;
}
//pone incerese decrese
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber(
        'phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber(
        'phone', 1219, false);
});
//handle case increase decrese event
document.getElementById('case-plus').addEventListener('click', function() {
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1; */
    updateProductNumber(
        'case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function() {
    /*  const caseInput = document.getElementById('case-number');
     const caseNumber = caseInput.value; */
    updateProductNumber(
        'case', 59, false);

});