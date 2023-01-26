export function showWarning(warning) {
  warning.style.visibility = "visible";
  warning.setAttribute("aria-hidden", false);
}

export function hideWarning(warning) {
  warning.style.visibility = "hidden";
  warning.setAttribute("aria-hidden", true);
}

export function elementInput(input, warning, text, defaultValue) {
  input.addEventListener("input", (e) => {
    if (!/^[0-9]*$/.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
      showWarning(warning);
    } else {
      hideWarning(warning);
    }
    let inputValue = e.target.value;
    if (inputValue) {
      text.textContent = inputValue;
    } else {
      text.textContent = defaultValue;
    }
  });
}
