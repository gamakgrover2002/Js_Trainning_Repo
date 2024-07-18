var expected = {
  foo: 6,
  bar: 5,
  name: {
    first: "John",
  },
};
var actual = {
  foo: 6,
  bar: 5,
  name: {
    first: "aditya",
    last: {
      name: "Aditya",
    },
  },
};

const compareObject = (obj1, obj2) => {
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    console.log("Expected " + obj1 + " got " + obj2);
    return;
  }
  for (let i = 0; i < key1.length; i++) {
    if (key1[i] != key2[i]) {
      console.log("Expected " + obj1 + " got " + obj2);
      return;
    }
  }
  for (let key in obj1) {
    if (obj1[key] != obj2[key]) {
      if (typeof obj1[key] === "object") {
        compareObject(obj1[key], obj2[key]);
        return;
      }
      console.log("Expected " + obj1 + " got " + obj2);
      return;
    }
  }
  console.log("Objects are Equal");
};
compareObject(actual, expected);

// Final review points

// 1.) use triple equals sign
// 2.) use methods of array and object for traversal
// 3.) properly think about edge cases
// 4.) try implement what you have learned
