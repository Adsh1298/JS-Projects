function calculateLoan(){
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRateInput').value);
    const loanTerm = parseFloat(document.getElementById('loanTermInput').value);

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        showError('Please enter valid numbers for all fiedls');
        return;
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1+ monthlyInterest, -totalPayments));

    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p><strong>Monthly Payment: &#8377; ${monthlyPayment.toFixed(2)}</strong></p>
    <p><strong>Total Interest: &#8377; ${totalInterest.toFixed(2)}</strong></p>`;
}

function showError(message){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p class="error">${message}</p>`;
}

document.getElementById('calculateBtn').addEventListener('click', calculateLoan);