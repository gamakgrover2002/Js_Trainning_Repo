/*Implement a method that takes an expression and performs the calculation accordingly.
example: calculation of [ 1+(2+3)*4-10/2 ]

Note: Verify that BODMAS is applied in case of complex queries and the correct result is returned.*/
function precedence(c) {
  if (c == "^") return 3;
  else if (c == "/" || c == "*") return 2;
  else if (c == "+" || c == "-") return 1;
  else return -1;
}

const postfixConversion = (expression) => {
  let stack = [];
  let newExpression = "";
  for (let i = 0; i < expression.length; i++) {
    let c = expression.charAt(i);
    if (c == "*" || c == "+" || c == "-" || c == "/") {
      while (stack.length > 0 && precedence(stack[0]) >= precedence(c)) {
        newExpression += stack.pop();
      }
      stack.push(c);
    } else {
      if (c == "[" || c == "(" || c == "]" || c == ")") {
        continue;
      } else {
        newExpression += c;
      }
    }
  }
  while (stack.length > 0) {
    newExpression += stack.pop();
  }
  return newExpression;
};
const solve = (x, c, y) => {
  switch (c) {
    case "+":
      return x + y;
      break;
    case "-":
      return Math.abs(x - y);
      break;
    case "/":
      if (y == 0) {
        return -1;
      }
      return x / y;
      break;
    case "*":
      return x * y;
  }
};
const evaluate = (expression) => {
  expression = postfixConversion(expression);
  let operands = [];

  for (let i = 0; i < expression.length; i++) {
    let c = expression.charAt(i);
    if (c == "[" || c == "(" || c == "]" || c == ")") {
      let num = solve(operands.pop(), c, operands.pop());
      operands.push(num);
    } else {
      operands.push(c);
    }
  }
};
