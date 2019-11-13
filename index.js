let calc = document.getElementById("calc");


function calculate() {
    let amount = document.getElementById("amount");
    let apr = document.getElementById("apr");
    let years = document.getElementById("years");

    document.getElementById("payment").style.color = "red";
    let total = document.getElementById("total");
    let totalinterest = document.getElementById("totalinterest");

    let principal = parseFloat(amount.value);
    let interest = (parseFloat(apr.value) / 100) / 12;
    let payments = parseFloat(years.value) * 12;

    let x = Math.pow(1 + interest, payments);
    let monthly = (principal * x * interest) / (x - 1);

    amount.innerHTML = `$amount`;
    payment.innerHTML = monthly.toFixed(2);
    total.innerHTML = (monthly * payments).toFixed(2);
    totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);
    return false;

}