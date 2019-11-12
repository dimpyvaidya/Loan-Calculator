let btnCalculate = document.getElementById("loanTerm");

function calLoanTerm() {
    let years = document.getElementById("years").value;
    let result = parseFloat(years.value) * 12;

    alert(`Number of payments required for ${years} is ${result}`);
}
//make the buttons eventlistener
btnArea.addEventListener("click", calLoanTerm);