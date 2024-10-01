import { createLink, openNewTab } from "./element-creator";

function createHomePage() {
  document.getElementById("content").style.backgroundImage =
    "url(./images/background-img.jpg)";

  const titleOverlay = document.createElement("div");
  const title = document.createElement("h1");
  const linkContainer = document.createElement("div");

  linkContainer.classList.add("link-container");
  titleOverlay.classList.add("title-overlay");
  title.innerText = "Greeks Gyros and More!";

  document.getElementById("content").appendChild(titleOverlay);
  titleOverlay.appendChild(title);
  titleOverlay.appendChild(linkContainer);
  createLink(linkContainer, "Home", "link", "home");
  createLink(linkContainer, "Menu", "link", "menu");
  createLink(linkContainer, "Contact", "link", "contact");

  document
    .querySelector('[data-button-type="menu"]')
    .addEventListener("click", () => {
      openNewTab(".title-overlay", "menu");
    });

  document
    .querySelector('[data-button-type="contact"]')
    .addEventListener("click", () => {
      openNewTab(".title-overlay", "contact");
    });
}

export { createHomePage };
