//converts numbers to array and push
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
// sets precedence of each operator
const precedence = (c) => {
  if (c == "^") return 3;
  else if (c == "/" || c == "*") return 2;
  else if (c == "+" || c == "-") return 1;
  else return -1;
};
// calculte the valur of converted array
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
          let x = operands.pop();
          let y = operands.pop();
          let z = operators.pop();
          let sum = 0;
          switch (z) {
            case "+":
              sum = y + x;
              break;
            case "-":
              sum = y - x;
              break;
            case "*":
              sum = y * x;
              break;
            case "/":
              sum = y / x;
          }
          operands.push(sum);
        }
        operators.pop(); // Remove the '('
      } else if (arr[i] == "(") {
        operators.push("(");
      } else {
        while (
          operators.length > 0 &&
          precedence(arr[i]) <= precedence(operators[operators.length - 1]) &&
          operators[operators.length - 1] != "("
        ) {
          let x = operands.pop();
          let y = operands.pop();
          let z = operators.pop();
          let sum = 0;
          switch (z) {
            case "+":
              sum = y + x;
              break;
            case "-":
              sum = y - x;
              break;
            case "*":
              sum = y * x;
              break;
            case "/":
              sum = y / x;
          }
          operands.push(sum);
        }
        operators.push(arr[i]);
      }
    }
  }
  while (operators.length > 0) {
    let x = operands.pop();
    let y = operands.pop();
    let z = operators.pop();
    let sum = 0;
    switch (z) {
      case "+":
        sum = y + x;
        break;
      case "-":
        sum = y - x;
        break;
      case "*":
        sum = y * x;
        break;
      case "/":
        sum = y / x;
    }
    operands.push(sum);
  }
  console.log(operands[0]);
};
evaluate("//converts numbers to array and push
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
}
// you need to focus on every edge case and try to handle as many edge cases as you can and try to throw user friendly error

// you need to use better variable names 