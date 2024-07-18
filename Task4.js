// implementing basic calculator with switch
const calculate = (num1, num2, opearator) => {
  let ans = 0;
  switch (opearator) {
    case "+":
      ans = num1 + num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    case "*":
      ans = num1 * num2;
      break;
    case "/":
      if (num2 == 0) {
        console.log("Cant divide by 0");
        return;
      }
      ans = num1 / num2;
      break;
    case "%":
      ans = num1 % num2;
      break;
    case "^":
      ans = num1 ** num2;
      break;

    default:
      console.log("Invalid operator");
      return;
  }
  if (isNaN(ans)) {
    console.log("Invalid input");
  } else {
    console.log(ans);
  }
};
calculate(30, "+", "/");
