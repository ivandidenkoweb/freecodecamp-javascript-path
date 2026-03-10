function steamrollArray(arr) {
  const flattenedArray = [];

  function flatten(item) {
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        flatten(item[i]);
      }
    } else {
      flattenedArray.push(item);
    }
  }

  flatten(arr);

  return flattenedArray;
}
