window.onload = handleOnLoad;

function handleOnLoad(){
    const calculateButtonEl = document.getElementById("calculateButton");
    
    calculateButtonEl.onclick = handleCalculateOnClick;
}

function handleCalculateOnClick(){
    const payoutAmountInputEl = document.getElementById("payoutAmountField");
    const interestRateInputEl = document.getElementById("interestRateField");
    const payoutLengthInputEl = document.getElementById("payoutLengthField");
    const presentValueInputEl = document.getElementById("presentValueField");

    const payoutAmount = Number(payoutAmountInputEl.value);
    const interestRate = Number(interestRateInputEl.value);
    const payoutLengthYears = Number(payoutLengthInputEl.value);

    // pre-calculating smaller portions of  larger equation
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numPeriods = (payoutLengthYears * 12);

    // present value calculation
    presentValueInputEl.value = (payoutAmount * (( 1 - (1 + monthlyInterestRate) ** -(numPeriods)) / monthlyInterestRate)).toFixed(2);
}

// resetting all fields through reset button
document.getElementById("resetButton").onclick = function(){
    document.getElementById("payoutAmountField").value = "";
    document.getElementById("interestRateField").value = "";
    document.getElementById("payoutLengthField").value = "";

    document.getElementById("presentValueField").value = "";
}