function confirmEnding(string1, string2) {
  let result = string2 == string1.slice(-string2.length) ? true : false;
  return result;
}
