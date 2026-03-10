function addTogether() {
  const [first, second] = arguments;

  const isNumber = (num) => typeof num === "number";

  if (!isNumber(first)) {
    return undefined;
  }

  if (arguments.length > 1) {
    if (!isNumber(second)) {
      return undefined;
    }
    return first + second;
  }

  return function (nextArg) {
    if (!isNumber(nextArg)) {
      return undefined;
    }
    return first + nextArg;
  };
}
