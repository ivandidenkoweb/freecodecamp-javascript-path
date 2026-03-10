function pyramid(str, num, type) {
  let pyramid = "\n";
  if (!type) {
    let numStr = 1;
    for (let i = 1; i <= num; i++) {
      pyramid = pyramid + " ".repeat(num - i) + str.repeat(numStr) + "\n";
      numStr += 2;
    }
  } else {
    let numStr = num * 2 - 1;
    for (let i = 1; i <= num; i++) {
      pyramid = pyramid + " ".repeat(i - 1) + str.repeat(numStr) + "\n";
      numStr -= 2;
    }
  }

  return pyramid;
}
