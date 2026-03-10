let checkBtn = document.getElementById("check-btn");
let textInput = document.getElementById("text-input");
let resultElement = document.getElementById("result");

function checkPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

checkBtn.addEventListener("click", () => {
  console.log(textInput.value);
  if (!textInput.value) {
    alert("Please input a value");
  }

  if (checkPalindrome(textInput.value)) {
    resultElement.textContent = `${textInput.value} is a palindrome`;
  } else {
    resultElement.textContent = `${textInput.value} is not a palindrome`;
  }
});
