function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    let numArray = rangeOfNumbers(startNum, endNum - 1);
    numArray.push(endNum);
    return numArray;
  }
}

console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(1, 5));
