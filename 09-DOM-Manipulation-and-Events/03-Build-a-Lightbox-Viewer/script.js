let galleryItems = document.querySelectorAll(".gallery-item");
let lightbox = document.querySelector(".lightbox");
let lightboxImg = document.querySelector("#lightbox-image");
let closeBtn = document.querySelector("#close-btn");

galleryItems.forEach((item) => {
  item.addEventListener("click", showImg);
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", closeLightbox);

function showImg(event) {
  lightbox.style = "display: flex";
  let newUrl = event.target.getAttribute("src").replace("-thumbnail", "");
  lightboxImg.setAttribute("src", newUrl);
}

function closeLightbox() {
  lightbox.style = "display: none";
}
