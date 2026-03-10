function mutation(arr) {
  let lowerCaseArr = [];

  for (let item of arr) {
    lowerCaseArr.push(item.toLowerCase());
  }

  let result = true;

  for (let char of lowerCaseArr[1]) {
    if (!lowerCaseArr[0].includes(char)) {
      result = false;
    }
  }

  return result;
}
