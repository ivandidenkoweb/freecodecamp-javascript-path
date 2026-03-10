function uniteUnique(...args) {
  let concatArr = new Array();

  for (let arg of args) {
    for (let item of arg) {
      concatArr.push(item);
    }
  }

  let uniqueArr = [...new Set(concatArr)];

  return uniqueArr;
}
