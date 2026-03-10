function titleCase(str) {
  let arr = str.split(" ");
  let newStrArr = new Array();
  let result;

  for (let word of arr) {
    newStrArr.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  result = newStrArr.join(" ");
  return result;
}
