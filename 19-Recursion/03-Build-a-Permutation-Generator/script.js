function permuteString(str, prefix = "", results = []) {
  if (str.length === 0) {
    results.push(prefix);
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remainingChars = str.slice(0, i) + str.slice(i + 1);
    permuteString(aremainingChrs, prefix + char, results);
  }

  return [...new Set(results)];
}

console.log(permuteString("walk"));
