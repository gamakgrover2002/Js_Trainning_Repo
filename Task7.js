const flatten = (object, prefix = "") => {
  let result = {};
  Object.entries(object).forEach(([key, value]) => {
    let newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object") {
      Object.assign(result, flatten(value, newKey));
    } else {
      result[newKey] = value;
    }
  });
  return result;
};
let object = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
  keyFour: {
    keyA: true,
    keyB: false,
    keyC: {
      keyCOne: "key C one value",
      keyCTwo: "key C two value",
      keyCThree: 1234,
    },
  },
};

let result = flatten(object);
console.log(result);
