let hearts = document.querySelectorAll(".favorite-icon");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => toRedHeart(heart));
});

function toRedHeart(el) {
  console.log(el.classList);
  if (!el.classList.contains("filled")) {
    el.classList = "favorite-icon filled";
    el.innerHTML = "❤";
  } else {
    el.classList = "favorite-icon";
    el.innerHTML = "♡";
  }
}
