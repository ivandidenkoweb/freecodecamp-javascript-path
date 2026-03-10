function dropElements(arr, func) {
  if (arr.length === 0) return [];

  do {
    if (func(arr[0])) {
      break;
    }
    arr.shift();
  } while (arr.length > 0);
  return arr;
}
