let source = [
  {
    batch_id: "123",
    name: "Tony",
    contact: "9872276210",
  },
  {
    batch_id: "231",
    name: "Steve",
    contact: "7876543210",
  },
  {
    batch_id: "123",
    name: "Bruce",
    contact: "6776543210",
  },
  {
    batch_id: "321",
    name: "Clint",
    contact: "8954643210",
  },
  {
    batch_id: "123",
    name: "Peter",
    contact: "7666543210",
  },
  {
    batch_id: "231",
    name: "Phil",
    contact: "8896543210",
  },
  {
    batch_id: "321",
    name: "Nick",
    contact: "9876521210",
  },
];

let result = {};
source.forEach((object) => {
  let { batch_id, ...rest } = object;
  if (result[batch_id]) {
    result[batch_id].push(rest);
  } else {
    result[batch_id] = [rest];
  }
});
let resultArray = Object.entries(result).map(([batchId, values]) => ({
  [batchId]: values,
}));
console.log(resultArray);
