//Method 1 Vlue changes of orignal object when changing other object
/* let obj = {
  name: "abc",
  age: 10,
  obj: {
    name: "xyz",
    age: 20,
  },
};
let obj2 = Object.assign(obj);
obj2.age = 30;
console.log(obj);
console.log(obj2);
 */

//Method 2 using parseJson and parseString
let obj = {
  name: "abc",
  age: 10,
  obj: {
    name: "xyz",
    age: 20,
  },
};
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.age = 30;
console.log(obj);
console.log(obj2);
