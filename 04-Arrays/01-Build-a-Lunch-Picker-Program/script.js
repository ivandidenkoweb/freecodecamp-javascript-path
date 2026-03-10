let lunches = [];

function addLunchToEnd(arr, string) {
  arr.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, string) {
  arr.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length) {
    console.log(`${arr.pop()} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }

  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length) {
    console.log(`${arr.shift()} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }

  return arr;
}

let getRandomLunch = (arr) =>
  arr.length
    ? console.log(
        `Randomly selected lunch: ${arr[Math.floor(Math.random() * arr.length)]}`,
      )
    : console.log("No lunches available.");

function showLunchMenu(arr) {
  arr.length
    ? console.log(`Menu items: ${arr.join(", ")}`)
    : console.log("The menu is empty.");
}
