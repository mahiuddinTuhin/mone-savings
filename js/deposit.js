document.getElementById('btn-deposit').addEventListener('click', function(){
    
    
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');
    
    const previousBalanceTotal = getElementValueById('balance-total');
    
    if (isNaN(newDepositAmount) || newDepositAmount < 0) {
        confirm("Enter a valid amount.");
    }
    else {
        const newDepositTotal = newDepositAmount + previousDepositTotal;
        setTextElementValueById('deposit-total', newDepositTotal);
        
        const newBalanceTotal = previousBalanceTotal + newDepositAmount;
        setTextElementValueById('balance-total', newBalanceTotal);
    }
})

enterBtn('deposit-field', 'btn-deposit');