document.getElementById('btn-deposit').addEventListener('click', function () {

    //getting deposit value
    const depositFieldValue = document.getElementById('deposit-field');
    const newDeposit = parseFloat(depositFieldValue.value);
    depositFieldValue.value = "";
    

    //getting previous deposit value
    const depositTotal = document.getElementById('deposit-total');
    const oldDeposit = parseFloat(depositTotal.innerText);
    

    //balance getting
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = parseFloat(balanceTotal.innerText);


    if (newDeposit < 0 || isNaN(newDeposit)) {
        confirm('Please enter valid amount');
        return;
    }
    else {
        depositTotal.innerText = oldDeposit + newDeposit;
        balanceTotal.innerText = balanceTotalAmount + newDeposit;
        return;
    }

})


const input = document.getElementById("deposit-field");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn-deposit").click();
  }
});