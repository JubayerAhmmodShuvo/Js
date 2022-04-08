function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const depositTotalText = totalElement.innerText;
    const previousTotal = parseFloat(depositTotalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentB e() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceText = parseFloat(balanceTotalText);
    return previousBalanceText;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*     const balanceTotalText = balanceTotal.innerText;
        const previousBalanceText = parseFloat(balanceTotalText); */
    const previousBalanceText = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceText + amount;
    } else {
        balanceTotal.innerText = previousBalanceText - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function() {
    /*  const depositInput = document.getElementById('deposit-input');
     const depositAmountText = depositInput.value;
     const depositAmount = parseFloat(depositAmountText); */

    const depositAmount = getInputValue('deposit-input');

    //get current deposit5
    /*  const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousTotalText = parseFloat(depositTotalText);
     depositTotal.innerText = previousTotalText + depositAmount; */

    //update balance input
    /*   const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceText = parseFloat(balanceTotalText);
      balanceTotal.innerText = previousBalanceText + depositAmount; */
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);

    } else {
        alert('Please enter a valid amount');
    }


});

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function() {
    /*  const withdrawInput = document.getElementById('withdraw-input');
     const withdrawAmountText = withdrawInput.value;
     const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue('withdraw-input');

    //withdraw deposit amount
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawText = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawText + withdrawAmount; */



    //update balance input
    /*     const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceText = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceText - withdrawAmount;
     */
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && currentBalance > 0) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    } else {
        alert('Please enter a valid amount');
    }
});