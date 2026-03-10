function myReplace(string, word1, word2) {
  let regex = new RegExp(word1, "gi");

  let result = string.replace(regex, (match) => {
    if (match[0] === match[0].toUpperCase()) {
      return word2.charAt(0).toUpperCase() + word2.slice(1);
    }
    return word2.toLowerCase();
  });

  return result;
}
