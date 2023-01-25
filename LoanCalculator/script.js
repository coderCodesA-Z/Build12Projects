function calculateLoan() {
    const loanAmountVal = +(document.getElementById("loan-amount").value);
    const interestRateVal = +(document.getElementById("interest-rate").value);
    const monthsToPayVal = +(document.getElementById("months-to-pay").value);

    const interest = (loanAmountVal * (interestRateVal * 0.01))/monthsToPayVal;
    const monthlyPayment = ((loanAmountVal / monthsToPayVal) + interest).toFixed(3);
    const monthlyPaymentEl = document.getElementById("monthly-payment");
    console.dir(monthlyPaymentEl);
    monthlyPaymentEl.innerText = monthlyPayment.toString();
}

calculateLoan();