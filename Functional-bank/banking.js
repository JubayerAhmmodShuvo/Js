function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    //clear input field
    depositInput.value = '';
    return depositAmount;
}

document.getElementById('deposit-button').addEventListener('click', function() {
    /*  const depositInput = document.getElementById('deposit-input');
     const depositAmountText = depositInput.value;
     const depositAmount = parseFloat(depositAmountText); */

    const depositAmount = getInputValue();

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

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    //withdraw deposit amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawText = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawText + withdrawAmount;
    //clear field
    withdrawInput.value = '';
    //update balance input
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceText = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceText - withdrawAmount;

});