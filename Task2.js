const mainFunction = (...args) => {
  if (args.length > 3) {
    console.log("Too many arguments");
  }
  if (args.length == 2) {
    console.log(args[0](args[1]));
  } else if (args.length == 3) console.log(args[0](args[1], args[2]));
};

const convertTempearature = (temperature) => {
  return (temperature * 9) / 5 + 32;
};
const CalcAreaTriangle = (height, base) => {
  return (height * base) / 2;
};
const CalcAreaparrallogram = (height, base) => {
  return height * base;
};
const FindPerimeterParallogram = (height, base) => {
  return 2 * (height + base);
};
mainFunction(convertTempearature, 32);
mainFunction(CalcAreaTriangle, 6, 4, 3, 4);
mainFunction(CalcAreaparrallogram, 6, 6);
mainFunction(FindPerimeterParallogram, 6, 6);

// better namig convention
// /handle edge cases and throw user friendly error
