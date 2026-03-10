function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (alphabet === str) {
    return undefined;
  }

  let startIndex = alphabet.indexOf(str[0]);

  for (let i = startIndex; i < alphabet.length; i++) {
    for (let x = 0; x < str.length; x++) {
      if (alphabet[i] !== str[x]) {
        return alphabet[i];
      }
      i++;
    }
  }
}
