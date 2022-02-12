document.getElementById('deposit-button').addEventListener('click', function() {
    const inputAmount = document.getElementById('deposit-input');
    const inputAmountText = inputAmount.value;
    const toatlInput = parseFloat(inputAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;

    const depositTotall = parseFloat(depositTotalText);
    const total = depositTotall + toatlInput;
    depositTotal.innerText = total;

    inputAmount.value = '';

    const balanceTotally = document.getElementById('balance-total');
    const balanceTotallyText = balanceTotally.innerText;
    const previousBalanceText = parseFloat(balanceTotallyText);
    const newTotally = previousBalanceText + toatlInput;
    balanceTotally.innerText = newTotally;
});
document.getElementById('withdraw-button').addEventListener('click', function() {
    const inputAmount = document.getElementById('withdraw-input');
    const inputAmountText = inputAmount.value;
    const toatlInput = parseFloat(inputAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotall = parseFloat(withdrawTotalText);
    const total = withdrawTotall + toatlInput;
    withdrawTotal.innerText = total;
    inputAmount.value = '';

    const balanceTotally = document.getElementById('balance-total');
    const balanceTotallyText = balanceTotally.innerText;
    const previousBalanceText = parseFloat(balanceTotallyText);
    const newTotally = previousBalanceText - toatlInput;
    balanceTotally.innerText = newTotally;
});