const minimumReversal = (expression) => {
  let stack = [];
  if (expression.length == 0) {
    console.log(0);
  }
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "{") {
      stack.push("(");
    } else if (expression[i] === "}") {
      stack.pop();
    } else {
      console.log("Invalid Input");
      return;
    }
  }
  if (stack.length % 2 === 0) {
    console.log(stack.length / 2);
  } else {
    console.log(-1);
  }
};
minimumReversal("{{{{}}");
