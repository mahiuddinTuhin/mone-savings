document.getElementById('btn-withdraw').addEventListener('click', function () {

    //getting deposit value
    const withdrawFieldValue = document.getElementById('withdraw-field');
    const newWithdraw = parseFloat(withdrawFieldValue.value);
    withdrawFieldValue.value = "";
    

    //getting previous deposit value
    const withdrawTotal = document.getElementById('withdraw-total');
    const oldWithdraw = parseFloat(withdrawTotal.innerText);


    //balance getting
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = parseFloat(balanceTotal.innerText);
    
    if (newWithdraw < 0 || isNaN(newWithdraw)) {
        confirm('Please enter valid amount');
        return;
    }
    else if (newWithdraw > balanceTotalAmount) {
        confirm('You Do not have enough balance.');
        return;
    }
    else {
        withdrawTotal.innerText = oldWithdraw + newWithdraw;
        balanceTotal.innerText = balanceTotalAmount - newWithdraw;
        return;
    }

})


document.getElementById("withdraw-field").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn-withdraw").click();
  }
});