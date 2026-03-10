let currentDate = new Date();
let currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

console.log(formatDateMMDDYYYY(currentDate));

function formatDateLong(date) {
  let options = {
    month: "long",
  };
  let formattedDate = `${date.toLocaleDateString("en-GB", options)} ${date.getDate()}, ${date.getFullYear()}`;
  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}

console.log(formatDateLong(currentDate));
