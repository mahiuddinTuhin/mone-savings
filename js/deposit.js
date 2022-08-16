document.getElementById('btn-deposit').addEventListener('click', function(){
    
    
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');
    const newDepositTotal = newDepositAmount + previousDepositTotal;

    setTextElementValueById('deposit-total', newDepositTotal);


    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})