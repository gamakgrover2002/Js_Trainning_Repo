// params object
let params = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
};
// base url
let url = "https://localhost:400";
// function to generate query string
const generatequeryString = (url, params) => {
  let querystring = url + "?";

  //   for (let key in params) {
  //     querystring += key + "==" + params[key];
  //     querystring += " ";
  //   }

  Object.entries(params).forEach(([key, value]) => {
    querystring += key + "==" + value;
    querystring += " ";
  });
  console.log(querystring);
};
generatequeryString(url, params);

const obj = {
  name: "Aditya",
  roll: "12",
};

// const { roll: id, name } = obj;
// console.log(id, name);

// const arr = [["Aditya", "ayush"], "Raj", "Ayush"];
// const [first, , third] = arr;
// const [key, value] = first;
// console.log(key, value);
