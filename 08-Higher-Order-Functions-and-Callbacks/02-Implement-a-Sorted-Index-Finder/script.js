function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  let index = arr.findIndex((item) => item >= num);

  if (index == -1) {
    return arr.length;
  } else {
    return index;
  }
}
