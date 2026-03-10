function frankenSplice(arr1, arr2, index) {
  let arr3 = new Array();

  for (let i = 0; i < index; i++) {
    arr3.push(arr2[i]);
  }

  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }

  for (let i = index; i < arr2.length; i++) {
    arr3.push(arr2[i]);
  }

  return arr3;
}
