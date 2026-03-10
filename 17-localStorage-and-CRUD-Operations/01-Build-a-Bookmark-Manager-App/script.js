const mainSection = document.querySelector("#main-section");
const formSection = document.querySelector("#form-section");
const addBookmarkBtn = document.querySelector("#add-bookmark-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.querySelector("#category-dropdown");
const closeFormBtn = document.querySelector("#close-form-button");
const addBookmarkBtnForm = document.querySelector("#add-bookmark-button-form");
const bookmarkListSection = document.querySelector("#bookmark-list-section");
const viewCategoryBtn = document.querySelector("#view-category-button");
const categoryList = document.querySelector("#category-list");
const closeListBtn = document.querySelector("#close-list-button");
const deleteBookmarkBtn = document.querySelector("#delete-bookmark-button");
const nameInput = document.querySelector("#name");
const urlInput = document.querySelector("#url");

function getBookmarks() {
  const bookmarks = localStorage.getItem("bookmarks");
  if (!bookmarks) return [];

  try {
    const parsedBookmarks = JSON.parse(bookmarks);
    if (Array.isArray(parsedBookmarks)) {
      return parsedBookmarks.filter(
        (b) =>
          typeof b.name === "string" &&
          typeof b.url === "string" &&
          typeof b.category === "string",
      );
    } else {
      return [];
    }
  } catch (e) {
    return [];
  }
}

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

addBookmarkBtn.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkBtnForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();
  const newBookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value,
  };

  bookmarks.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";
  displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
  const selectedCat = categoryDropdown.value;
  categoryName.innerText = selectedCat;

  categoryList.innerHTML = "";

  const bookmarks = getBookmarks();
  const filtered = bookmarks.filter((b) => b.category === selectedCat);

  if (filtered.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    categoryList.innerHTML = filtered
      .map(
        (bookmark) => `
      <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark-item">
      <label for="${bookmark.name}">
        <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
      </label>
    `,
      )
      .join("");
  }

  displayOrHideCategory();
});

closeListBtn.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector(
    'input[name="bookmark-item"]:checked',
  );

  if (!selectedRadio) return;

  const bookmarkName = selectedRadio.value;
  const currentCategory = categoryName.innerText;

  let bookmarks = getBookmarks();

  bookmarks = bookmarks.filter(
    (b) => !(b.name === bookmarkName && b.category === currentCategory),
  );

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  const filtered = bookmarks.filter((b) => b.category === currentCategory);
  if (filtered.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    categoryList.innerHTML = filtered
      .map(
        (bookmark) => `
      <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark-item">
      <label for="${bookmark.name}">
        <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
      </label>
    `,
      )
      .join("");
  }
});
