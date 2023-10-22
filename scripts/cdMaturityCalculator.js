window.onload = handleOnLoad;

function handleOnLoad(){
    const calculateButtonEl = document.getElementById("calculateButton");
    
    calculateButtonEl.onclick = handleCalculateOnClick;
}

function handleCalculateOnClick(){
    const depositInputEl = document.getElementById("depositField");
    const interestRateInputEl = document.getElementById("interestRateField");
    const termLengthInputEl = document.getElementById("termLengthField");
    const futureValueInputEl = document.getElementById("futureValueField");
    const totatlInterestInputEl = document.getElementById("totatlInterestField");
    // const answerInputEl = document.getElementById("answerField");

    const deposit = Number(depositInputEl.value);
    const interestRate = Number(interestRateInputEl.value);
    const termLengthYears = Number(termLengthInputEl.value);

    const dailyCompounds = 365;

    // future value and total interest earned calculations
    futureValueInputEl.value = (deposit * (1 + ((interestRate / 100) / dailyCompounds)) ** (dailyCompounds * termLengthYears)).toFixed(2);
    totatlInterestInputEl.value = (futureValueInputEl.value - deposit).toFixed(2);

    // output of answer in sentence form
    // answerInputEl.value = `If you deposit $${deposit} in a CD that earns ${interestRate}% interest and matures in ${termLengthYears} years, your CD's ending balance will be $${futureValueInputEl.value} and you would have earned $${totatlInterestInputEl.value} in interest.`;
}

// resetting all fields through reset button
document.getElementById("resetButton").onclick = function(){
    document.getElementById("depositField").value = "";
    document.getElementById("interestRateField").value = "";
    document.getElementById("termLengthField").value = "";

    document.getElementById("futureValueField").value = "";
    document.getElementById("totatlInterestField").value = "";
    document.getElementById("answerField").value = "";
}