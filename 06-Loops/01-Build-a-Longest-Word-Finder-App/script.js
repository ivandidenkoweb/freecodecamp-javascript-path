function findLongestWordLength(sentence) {
  let words = sentence.trim().split(" ");
  let maxNum = 0;

  for (let word of words) {
    if (word.length > maxNum) {
      maxNum = word.length;
    }
  }

  return maxNum;
}
