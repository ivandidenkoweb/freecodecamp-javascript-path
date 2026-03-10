function destroyer(arr, ...args) {
  let newArr = arr;
  args.forEach(function (arg) {
    console.log(arg);
    newArr = newArr.filter((item) => item !== arg);
    console.log(newArr);
  });
  return newArr;
}
