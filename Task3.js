//coverts string to array to covert double digit number
const toArray = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; ) {
    let c = s.charAt(i);
    if (
      c === "+" ||
      c === "-" ||
      c === "*" ||
      c === "/" ||
      c === "(" ||
      c === ")"
    ) {
      stack.push(c);
      i++;
    } else {
      let num = 0;
      while (i < s.length && !isNaN(parseInt(s.charAt(i)))) {
        num = num * 10 + parseInt(s.charAt(i));
        i++;
      }
      stack.push(num);
    }
  }
  return stack;
};
const precedence = (c) => {
  if (c == "^") return 3;
  else if (c == "/" || c == "*") return 2;
  else if (c == "+" || c == "-") return 1;
  else return -1;
};
//calulates the result based on opearator
const calculate = (operand1, operand2, operator) => {
  let sum;
  switch (operator) {
    case "+":
      sum = operand1 + operand2;
      break;
    case "-":
      sum = operand1 - operand2;
      break;
    case "*":
      sum = operand1 * operand2;
      break;
    case "/":
      sum = operand2 / operand1;
  }
  return sum;
};
//finds the value of expression generated
const evaluate = (expression) => {
  let arr = toArray(expression);
  let operators = [];
  let operands = [];
  for (let i in arr) {
    if (!isNaN(arr[i])) {
      operands.push(arr[i]);
    } else {
      if (arr[i] == ")") {
        while (operators[operators.length - 1] != "(") {
          let operand1 = operands.pop();
          let operand2 = operands.pop();
          let operator = operators.pop();
          let sum = calculate(operand1, operand2, operator);

          operands.push(sum);
        }
        operators.pop();
      } else if (arr[i] == "(") {
        operators.push("(");
      } else {
        while (
          operators.length > 0 &&
          precedence(arr[i]) <= precedence(operators[operators.length - 1]) &&
          operators[operators.length - 1] != "("
        ) {
          let operand1 = operands.pop();
          let operand2 = operands.pop();
          let operator = operators.pop();
          let sum = calculate(operand1, operand2, operator);

          operands.push(sum);
        }
        operators.push(arr[i]);
      }
    }
  }
  while (operators.length > 0) {
    let operand1 = operands.pop();
    let operand2 = operands.pop();
    let opearator = operators.pop();
    let sum = calculate(operand1, operand2, opearator);

    operands.push(sum);
  }
  if (isNaN(operands[0])) {
    console.log("Invalid Expression");
  } else {
    console.log(operands[0]);
  }
};
// main function consist of checks on arguments as well calls calculating function
const solve = (...args) => {
  if (isNaN(args[0]) || isNaN(args[args.length - 1])) {
    console.log("Invalid Inputs");
    return;
  }
  for (let i = 0; i < args.length - 1; i = i + 2) {
    if (!isNaN(args[i + 1])) {
      console.log("Invalid Input two consecutive numbers");
      return;
    }
    if (isNaN(args[i + 2])) {
      console.log("Invalid Input two consecutive opearator");
      return;
    }
  }
  let expression = "";
  for (let i = 0; i < args.length; i++) {
    expression += args[i];
  }
  evaluate(expression);
};
solve(20, "+", 10, "+", 5, "/", "*");
