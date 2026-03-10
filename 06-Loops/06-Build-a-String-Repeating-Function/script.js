function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else {
    let result = "";
    for (let i = 1; i <= num; i++) {
      result += str;
    }
    return result;
  }
}
