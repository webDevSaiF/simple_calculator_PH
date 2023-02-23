const calcOperation = document.querySelector("#calc-operation");
const calcTyped = document.querySelector("#calc-typed");
const calcBtnRow = document.querySelector(".calc-button-row");

calcOperation.textContent = "";
calcTyped.textContent = 0;
//

calcBtnRow.addEventListener("click", function (e) {
  let typedNumberValue = 0;

  typedNumberValue = e.target.textContent;

  switch (typedNumberValue) {
    case "AC":
      calcOperation.textContent = "";
      calcTyped.textContent = 0;
      break;
    case "7":
      calcOperation.textContent += typedNumberValue;
      break;
    case "8":
      calcOperation.textContent += typedNumberValue;
      break;
    case "9":
      calcOperation.textContent += typedNumberValue;
      break;
    case "4":
      calcOperation.textContent += typedNumberValue;
      break;
    case "5":
      calcOperation.textContent += typedNumberValue;
      break;
    case "6":
      calcOperation.textContent += typedNumberValue;
      break;
    case "1":
      calcOperation.textContent += typedNumberValue;
      break;
    case "2":
      calcOperation.textContent += typedNumberValue;
      break;
    case "3":
      calcOperation.textContent += typedNumberValue;
      break;
    case "0":
      calcOperation.textContent += typedNumberValue;
      break;
    case ".":
      calcOperation.textContent += typedNumberValue;
      break;
    case "del":
      calcOperation.textContent = "";
      break;
    case "+":
      calcOperation.textContent += typedNumberValue;
      break;
    case "-":
      calcOperation.textContent += typedNumberValue;
      break;
    case "*":
      calcOperation.textContent += typedNumberValue;
      break;
    case "/":
      calcOperation.textContent += typedNumberValue;
      break;
    case "%":
      calcOperation.textContent += typedNumberValue;
      break;
    case "=":
      if (calcOperation.textContent) calcTyped.textContent = doMath();
  }
});

function doMath() {
  let operator;
  let operators = ["+", "-", "*", "/", "%"];

  for (let el of operators) {
    let operatorIndex = calcOperation.textContent;

    if (operatorIndex.indexOf(el) !== -1) {
      operator = el;
      break;
    }
  }
  if (operator !== "") {
    let operands = calcOperation.textContent.split(operator);
    let result;
    switch (operator) {
      case "+":
        result = operands.reduce((acc, cur) => acc + parseFloat(cur), 0);
        break;
      case "-":
        console.log(operands);
        result = operands.reduce((acc, cur) => acc - cur);
        break;
      case "*":
        result = operands.reduce((acc, cur) => acc * parseFloat(cur), 1);
        break;
      case "/":
        result = operands
          .slice(1)
          .reduce((acc, cur) => acc / parseFloat(cur), parseFloat(operands[0]));
        break;
      case "%":
        result = operands.reduce((acc, cur) => (acc / 100) * parseFloat(cur));
        break;
    }
    calcTyped.textContent = result;
    return result;
  }
}
