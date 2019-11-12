function calculate() {

    let amount = document.getElementById("amount");
    let apr = document.getElementById("apr");
    let years = document.getElementById("years");
    let payment = document.getElementById("payment");
    let total = document.getElementById("total");
    let totalinterest = document.getElementById("totalinterest");

    let principal = parseFloat(amount.value);
    let interest = parseFloat(apr.value) / 100 / 12;
    let payments = parseFloat(years.value) * 12;

}