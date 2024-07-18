// Calculator class
class Calculator {
  // constructor to initialize calculator object
  constructor() {}
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return sum1 - sum2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    if (num2 == 0) {
      return "Cannot divide by zero";
    }
    return num1 / num2;
  }
}
// function to perform caalculations ,creates calculator object
const calculate = (num1, num2, opearator) => {
  const calc = new Calculator();
  switch (opearator) {
    case "+":
      ans = calc.add(num1, num2);
      break;
    case "-":
      ans = calc.subtract(num1, num2);
      break;
    case "*":
      ans = calc.multiply(num1, num2);
      break;
    case "/":
      ans = calc.divide(num1, num2);
      break;
    default:
      console.log("Invalid Opearator");
      return;
  }
  console.log(ans);
};

calculate(10, 20, "><");

const func1 = () => {
  let a = 10;
  const func2 = () => {
    console.log(a);
  };
  return func2;
};
let x = func1();
x();
