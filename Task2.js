// main function receievs argumnets
const mainFunction = (...args) => {
  if (args.length > 3) {
    console.log("Too many arguments");
  }
  if (args.length == 2) {
    console.log(args[0](args[1]));
  } else if (args.length == 3) console.log(args[0](args[1], args[2]));
};
// function to convert temperature from celcius to farenhiet
const convertTempearature = (temperature) => {
  return (temperature * 9) / 5 + 32;
};
// function to calculate area of triangle
const CalcAreaTriangle = (height, base) => {
  return (height * base) / 2;
};
// calculate area of parallogram like rectangle and square
const CalcAreaparrallogram = (height, base) => {
  return height * base;
};
// find s perimeter of parallogram
const FindPerimeterParallogram = (height, base) => {
  return 2 * (height + base);
};
// Calling functions to test
mainFunction(convertTempearature, 32);
mainFunction(CalcAreaTriangle, 6, 4, 3, 4);
mainFunction(CalcAreaparrallogram, 6, 6);
mainFunction(FindPerimeterParallogram, 6, 6);

// better naming convention
// /handle edge cases and throw user friendly error
