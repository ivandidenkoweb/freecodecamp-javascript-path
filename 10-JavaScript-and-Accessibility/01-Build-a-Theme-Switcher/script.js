const themes = [
  {
    name: "light",
    message: "Світлу тему активовано!",
  },
  {
    name: "dark",
    message: "Темну тему активовано!",
  },
];

const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const menuItems = document.querySelectorAll('[role="menuitem"]');
const body = document.querySelector("body");
const politeMsg = document.querySelector('[aria-live="polite"]');

themeSwitcherBtn.addEventListener("click", () => {
  const isExpanded = themeSwitcherBtn.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    themeDropdown.setAttribute("hidden", "true");
    themeSwitcherBtn.setAttribute("aria-expanded", "false");
  } else {
    themeDropdown.removeAttribute("hidden");
    themeSwitcherBtn.setAttribute("aria-expanded", "true");
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    let id = event.target.getAttribute("id");
    body.setAttribute("class", id);
    let name = id.replace("theme-", "");
    let theme = themes.find((t) => t.name === name);
    politeMsg.textContent = theme.message;
  });
});
