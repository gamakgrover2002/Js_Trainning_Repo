const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum = sum + arr[i];
    } else if (typeof arr[i] === "object") {
      sum = sum + sumOfArray(arr[i]);
    } else {
      console.log("Invalid Input");
      return;
    }
  }
  return sum;
};
let ans = sumOfArray([1, [2, [4, [1, 2]], 3]]);
if (isNaN(ans)) {
  console.log("Invalid Input");
} else {
  console.log(ans);
}
// use or opearator
