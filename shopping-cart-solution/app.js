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

    //calculateTotal
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
//pone incerese decrese
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, false);
});
//handle case increase decrese event
document.getElementById('case-plus').addEventListener('click', function() {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false);
});