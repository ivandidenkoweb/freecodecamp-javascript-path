function playSound(key) {
  const audio = document.getElementById(key);
  if (audio) {
    audio.currentTime = 0;
    audio.play();

    const display = document.getElementById("display");
    display.innerText = audio.parentElement.id.replace(/-/g, " ");
  }
}

document.getElementById("pad-bank").addEventListener("click", (event) => {
  if (event.target.classList.contains("drum-pad")) {
    const audioId = event.target.innerText.trim();
    playSound(audioId);
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  playSound(key);

  const pad = document.getElementById(key)?.parentElement;
  if (pad) {
    pad.classList.add("active");
    setTimeout(() => pad.classList.remove("active"), 100);
  }
});
