document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    const previousBalanceTotal = getElementValueById('balance-total');
    
    if (isNaN(newWithdrawAmount)) {
        confirm("Enter a valid amount.");
    }
    else if (previousBalanceTotal < newWithdrawAmount) {
        confirm('new Withdraw Amount is greater than previous Balance Total.');
    }
    else {
        setTextElementValueById('withdraw-total', newWithdrawTotal);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        setTextElementValueById('balance-total', newBalanceTotal);
    }

    

})

enterBtn('withdraw-field', 'btn-withdraw');
