// @ts-nocheck
const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const resultText = document.querySelector("#result");
const buttons = document.querySelectorAll("[data-operator]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const operator = button.dataset.operator;

    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;

      case "-":
        result = num1 - num2;
        break;

      case "*":
        result = num1 * num2;
        break;

      case "/":
        if (num2 === 0) {
          resultText.textContent = "0 ga bo‘lish mumkin emas!";
          return;
        }
        result = num1 / num2;
        break;

      default:
        resultText.textContent = "Noma'lum operator";
        return;
    }

    resultText.textContent = result;
  });
});
