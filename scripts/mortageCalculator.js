window.onload = handleOnLoad;

// principal(interest/(1-(1+interest)^-length of loan in months))
function handleOnLoad(){
    const calculateButtonEl = document.getElementById("calculateButton");
    
    calculateButtonEl.onclick = handleCalculateOnClick;

}

function handleCalculateOnClick(){
    const principalInputEl = document.getElementById("principalField");
    const interestRateInputEl = document.getElementById("interestRateField");
    const loanLengthInputEl = document.getElementById("loanLengthField");
    const monthlyPaymentInputEl = document.getElementById("monthlyPaymentField");
    const totatlInterestInputEl = document.getElementById("totatlInterestField");

    const principal = Number(principalInputEl.value);
    const interestRate = Number(interestRateInputEl.value);
    const loanLengthYears = Number(loanLengthInputEl.value);

    // pre-calculating smaller portions of  larger equation
    const monthlyInterestRate = (interestRate / 100) / (12);
    const numberOfPayments = loanLengthYears * 12;

    // monthly payment and total interest calculations
    monthlyPaymentInputEl.value = (principal * ((monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments) / ((1 + monthlyInterestRate)**numberOfPayments - 1))).toFixed(2);
    const totalPayment = monthlyPaymentInputEl.value * numberOfPayments;
    totatlInterestInputEl.value = (totalPayment - principal).toFixed(2);
}

// resetting all fields through reset button
document.getElementById("resetButton").onclick = function(){
    document.getElementById("principalField").value = "";
    document.getElementById("interestRateField").value = "";
    document.getElementById("loanLengthField").value = "";

    document.getElementById("monthlyPaymentField").value = "";
    document.getElementById("totatlInterestField").value = "";

}