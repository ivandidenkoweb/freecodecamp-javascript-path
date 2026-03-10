function largestOfAll(arr) {
  let maxNumbers = new Array();

  for (let i = 0; i < arr.length; i++) {
    console.log(Math.max(...arr[i]));
    maxNumbers.push(Math.max(...arr[i]));
  }

  return maxNumbers;
}
