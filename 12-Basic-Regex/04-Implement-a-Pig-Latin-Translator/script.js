function translatePigLatin(str) {
  const vowelRegex = /[aeiou]/i;

  if (vowelRegex.test(str[0])) {
    return str + "way";
  }

  if (!vowelRegex.test(str)) {
    return str + "ay";
  }

  const consonantCluster = str.match(/^[^aeiou]+/)[0];

  return str.slice(consonantCluster.length) + consonantCluster + "ay";
}
