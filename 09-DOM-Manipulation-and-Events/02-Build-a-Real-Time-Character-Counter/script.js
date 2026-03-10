let textArea = document.querySelector("#text-input");
let counter = document.querySelector("#char-count");

textArea.addEventListener("input", inputHendler);

function inputHendler(event) {
  counter.innerHTML = `Character Count: ${event.target.value.length}/50`;
  if (event.target.value.length >= 50) {
    counter.style = "color: red";
    event.target.value = event.target.value.slice(0, 50);
  }
}
