import { showWarning, hideWarning, elementInput } from "./util.js";

const form = document.querySelector("[data-form]");

const formSection = document.querySelector("[data-form-section]");
const confirmationSection = document.querySelector("[data-confirmation-section]");
const continueBtn = document.querySelector("[data-continue-btn]");

// Credit Card text
const cardholderName = document.querySelector("[data-credit-card-name]");
const cardNumber = document.querySelector("[data-credit-card-number]");
const cardMonth = document.querySelector("[data-credit-card-month]");
const cardYear = document.querySelector("[data-credit-card-year]");
const cardCVC = document.querySelector("[data-credit-card-cvc]");

//  Inputs
const cardholderNameInput = document.querySelector("[data-credit-card-name-input]");
const cardNumberInput = document.querySelector("[data-credit-card-number-input]");
const cardMonthInput = document.querySelector("[data-credit-card-month-input]");
const cardYearInput = document.querySelector("[data-credit-card-year-input]");
const cardCVCInput = document.querySelector("[data-credit-card-cvc-input]");

//  Warnings
const cardholderWarning = document.querySelector("[data-cardholder-warning");
const cardNumberWarning = document.querySelector("[data-card-number-warning]");
const cardExpirationWarning = document.querySelector("[data-card-expiration-date]");
const cardCVCWarning = document.querySelector("[data-card-cvc]");

// Handle with inputs
cardholderNameInput.addEventListener("input", (e) => {
  if (!/^[a-zA-Z\s-]*$/.test(e.target.value)) {
    e.target.value = e.target.value.replace(/[^a-zA-Z\s-]/g, "");
    showWarning(cardholderWarning);
  } else if (e.target.value.length > 27) {
    e.target.value = e.target.value.substring(0, 27);
    hideWarning(cardholderWarning);
  } else {
    hideWarning(cardholderWarning);
    if (e.target.value.length === 0) {
      cardholderName.textContent = "jane appleseed";
    } else {
      cardholderName.textContent = e.target.value;
    }
  }
});

cardNumberInput.addEventListener("input", (e) => {
  if (!/^\d+$/.test(e.target.value)) {
    e.target.value = e.target.value.replace(/[^\d]/g, "");
    showWarning(cardNumberWarning);
  } else {
    hideWarning(cardNumberWarning);
  }
  let inputValue = e.target.value;
  let formattedValue;
  if (inputValue) {
    formattedValue =
      inputValue.slice(0, 4) +
      " " +
      inputValue.slice(4, 8) +
      " " +
      inputValue.slice(8, 12) +
      " " +
      inputValue.slice(12, 16);
  } else {
    formattedValue = "0000 0000 0000 0000";
  }
  cardNumber.textContent = formattedValue;
});

elementInput(cardMonthInput, cardExpirationWarning, cardMonth, "00");
elementInput(cardYearInput, cardExpirationWarning, cardYear, "00");
elementInput(cardCVCInput, cardCVCWarning, cardCVC, "000");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form.checkValidity()) {
    formSection.classList.add("hide-form");
    formSection.classList.remove("form-wrapper");

    confirmationSection.classList.add("form-wrapper");
    confirmationSection.classList.remove("hide-form");
  }
});

continueBtn.addEventListener("click", () => {
  window.location.href = "/app";
});
