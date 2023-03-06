document
  .getElementById("loan-form")
  .addEventListener("submit", (e) => calculateResults(e));

const calculateResults = (e: SubmitEvent) => {
  e.preventDefault();

  const amount = document.getElementById("amount") as HTMLInputElement;
  const interest = document.getElementById("interest") as HTMLInputElement;
  const years = document.getElementById("years") as HTMLInputElement;
  const monthlyPayment = document.getElementById(
    "monthly-payment"
  ) as HTMLInputElement;
  const totalPayment = document.getElementById(
    "total-payment"
  ) as HTMLInputElement;
  const totalInterest = document.getElementById(
    "total-interest"
  ) as HTMLInputElement;

  const principal = parseFloat(amount.value);
  const interestValue = parseFloat(interest.value) / 100 / 12;
  const paymentsValue = parseFloat(years.value) * 12;

  const paymentPerMonth = Math.pow(1 + interestValue, paymentsValue);
  const monthly =
    (principal * paymentPerMonth * interestValue) / (paymentPerMonth - 1);

  let errorDiv;
  if (!isFinite(monthly)) {
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    const errorDiv = document.createElement("div");
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode("The Value is not valid"));
    card.insertBefore(errorDiv, heading);
  } else {
    errorDiv = "";
  }

  monthlyPayment.value = isFinite(monthly) && monthly.toFixed();
  totalPayment.value =
    isFinite(monthly) && (monthly * paymentsValue).toFixed(2);
  totalInterest.value =
    isFinite(monthly) && (monthly * paymentsValue - principal).toFixed(2);
};
