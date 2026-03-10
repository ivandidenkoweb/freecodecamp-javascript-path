let regexPattern = document.getElementById("pattern");
let stringToTest = document.getElementById("test-string");
let testButton = document.getElementById("test-btn");
let testResult = document.getElementById("result");
let caseInsensitiveFlag = document.getElementById("i");
let globalFlag = document.getElementById("g");

function getFlags() {
  if (globalFlag.checked && caseInsensitiveFlag.checked) {
    return "gi";
  } else if (globalFlag.checked) {
    return "g";
  } else if (caseInsensitiveFlag.checked) {
    return "i";
  } else {
    return "";
  }
}

testButton.addEventListener("click", () => {
  let regex = new RegExp(regexPattern.value, getFlags());
  let text = stringToTest.textContent;
  if (regex.test(text)) {
    let highlightedText = text.replace(
      regex,
      '<span class="highlight">$&</span>',
    );
    let matches = text.match(regex);

    stringToTest.innerHTML = highlightedText;
    testResult.textContent = matches.join(", ");
  } else {
    testResult.textContent = "no match";
  }
});
