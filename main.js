const withdrawBtn = document.getElementById('withdraw-btn');
const withdrawBox = document.getElementById('withdraw-box');
const withdraw = document.getElementById('total-withdraw');
const depositeBtn = document.getElementById('deposite-btn');
const depositeBox = document.getElementById('deposite-box');
const deposite = document.getElementById('total-deposite');
const balance = document.getElementById('total-balance');
let currentDeposite = parseFloat(deposite.innerText);
let currentBalance = parseFloat(balance.innerText);
let currentWithdraw = parseFloat(withdraw.innerText);

depositeBtn.addEventListener('click', function () {
    if (isNaN(parseFloat(depositeBox.value))) {
        alert("Please enter a valid ammount")
        return;
    }
    const depositeAmmount = parseFloat(depositeBox.value);
    currentDeposite = currentDeposite + depositeAmmount;
    deposite.innerText = currentDeposite.toFixed(2);
    currentBalance = currentBalance + depositeAmmount;
    balance.innerText = currentBalance.toFixed(2);
    depositeBox.value = '';
})

withdrawBtn.addEventListener('click', function () {
    if (isNaN(parseFloat(withdrawBox.value))) {
        alert("Please enter a valid ammount")
        return;
    }
    else if (parseFloat(withdrawBox.value) > currentBalance) {
        alert("You don't have enough money in account")
        return;
    }
    const withdrawAmmount = parseFloat(withdrawBox.value);
    currentWithdraw = currentWithdraw + withdrawAmmount;
    withdraw.innerText = currentWithdraw.toFixed(2);
    currentBalance = currentBalance - withdrawAmmount;
    balance.innerText = currentBalance.toFixed(2);
    withdrawBox.value = '';
})