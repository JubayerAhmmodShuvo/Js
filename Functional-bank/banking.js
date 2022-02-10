document.getElementById('deposit-button').addEventListener('click', function() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    //get current deposit5
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousTotalText = parseFloat(depositTotalText);
    depositTotal.innerText = previousTotalText + depositAmount;
    //update balance input
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceText = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceText + depositAmount;
    //clear input field
    depositInput.value = '';

});