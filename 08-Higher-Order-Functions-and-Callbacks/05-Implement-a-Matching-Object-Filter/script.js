function whatIsInAName(arr, obj) {
  let newArr = arr.filter((item) => {
    return Object.keys(obj).every((key) => item[key] === obj[key]);
  });
  return newArr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" },
);
// should return [{ first: "Tybalt", last: "Capulet" }]
