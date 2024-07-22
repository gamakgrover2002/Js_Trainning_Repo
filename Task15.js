let a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// let b = [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

let N = a.length;
let M = a[0].length;
if (N != M) {
  console.log("Not a square matrix");
}
// find transpose of matrix
// naming conventions, meaningfull name
for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    // do it without third quetion, without any mathmetical operation
    let temp = a[i][j];
    a[i][j] = a[j][i];
    a[j][i] = temp;
  }
}
// swap last and first row

a.forEach((e) => {
  let temp = e[0];
  e[0] = e[e.length - 1];
  e[e.length - 1] = temp;
});
console.log(a);
