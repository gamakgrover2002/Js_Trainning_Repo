const { type } = require("os");

const flatten = (object, key) => {
  let result = [];
  Object.entries(object[key]).forEach(([subkey, value]) => {
    let temp = [key];
    temp = temp + "." + subkey;
    result.push({ [temp]: value });
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

const flattenJSON = (object) => {
  let ans = {};
  Object.keys(object).forEach((e) => {
    if (typeof object[e] === "object") {
      let temp = flatten(object, e);
      temp.forEach((e) => {
        Object.entries(e).forEach(([key, value]) => {
          ans[key] = value;
        });
      });
    } else {
      ans[e] = object[e];
    }
  });
  for (let key in ans) {
    if (typeof ans[key] === "object") {
      flattenJSON(ans);
    }
  }
  return ans;
};

let result = flattenJSON(object);
console.log(result);
