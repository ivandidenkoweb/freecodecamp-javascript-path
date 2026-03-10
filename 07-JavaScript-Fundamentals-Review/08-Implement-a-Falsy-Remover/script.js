function bouncer(arr) {
  let cleanArr = new Array();
  for (let item of arr) {
    if (Boolean(item)) {
      cleanArr.push(item);
    }
  }

  return cleanArr;
}
