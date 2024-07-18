let arr = [
  [1, 3],
  [2, 6],
  [0, 10],
  [15, 12],
];
var result = [];
var error = false;
const mergeInterval = () => {
  arr.sort((a, b) => a[0] - b[0]);
  arr.forEach((e) => {
    if (e[0] > e[1]) {
      error = true;
      return;
    }
  });
  let start = arr[0][0];
  let end = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] <= end) {
      end = arr[i][1];
    } else {
      result.push([start, end]);
      start = arr[i][0];
      end = arr[i][1];
    }
  }

  result.push([start, end]);
  if (error) {
    console.log("Invalid Input");
  } else {
    console.log(result);
  }
};
mergeInterval(arr);
