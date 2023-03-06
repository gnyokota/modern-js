document
    .getElementById("loan-form")
    .addEventListener("submit", (e) => calculateResults(e));
const calculateResults = (e) => {
    e.preventDefault();
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");
    const principal = parseFloat(amount.value);
    const interestValue = parseFloat(interest.value) / 100 / 12;
    const paymentsValue = parseFloat(years.value) * 12;
    const paymentPerMonth = Math.pow(1 + interestValue, paymentsValue);
    const monthly = (principal * paymentPerMonth * interestValue) / (paymentPerMonth - 1);
    let errorDiv;
    if (!isFinite(monthly)) {
        const card = document.querySelector(".card");
        const heading = document.querySelector(".heading");
        const errorDiv = document.createElement("div");
        errorDiv.className = "alert alert-danger";
        errorDiv.appendChild(document.createTextNode("The Value is not valid"));
        card.insertBefore(errorDiv, heading);
    }
    else {
        errorDiv = "";
    }
    monthlyPayment.value = isFinite(monthly) && monthly.toFixed();
    totalPayment.value =
        isFinite(monthly) && (monthly * paymentsValue).toFixed(2);
    totalInterest.value =
        isFinite(monthly) && (monthly * paymentsValue - principal).toFixed(2);
};
