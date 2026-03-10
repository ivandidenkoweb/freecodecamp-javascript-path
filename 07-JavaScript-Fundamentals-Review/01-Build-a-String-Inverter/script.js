function reverseString(str) {
  const charArray = str.split("");
  charArray.reverse();
  const reversedStr = charArray.join("");

  return reversedStr;
}
