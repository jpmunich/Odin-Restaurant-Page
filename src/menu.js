import { openNewTab, createTextElement } from "./element-creator";

function allowMenuSwitches() {
  document
    .querySelector('[data-button-type="home"]')
    .addEventListener("click", () => {
      openNewTab(".menu-page-container", "home");
    });

  document
    .querySelector('[data-button-type="contact"]')
    .addEventListener("click", () => {
      openNewTab(".menu-page-container", "contact");
    });
}

function createMenuItem(parent) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  parent.appendChild(menuItem);
  return menuItem;
}

function createMenu() {
  document.getElementById(
    "content"
  ).style.backgroundImage = `url(./images/contact-background.jpg)`;

  const menuPageContainer = document.createElement("div");
  menuPageContainer.classList.add("menu-page-container");
  document.getElementById("content").appendChild(menuPageContainer);

  createTextElement("h2", "Menu", menuPageContainer);

  const menuItemContainer = document.createElement("div");
  menuItemContainer.classList.add("menu-container");
  menuPageContainer.appendChild(menuItemContainer);

  const appetizerContainer = document.createElement("div");
  appetizerContainer.classList.add("menu-item-container");
  createTextElement("h3", "Appetizers", menuItemContainer);
  menuItemContainer.appendChild(appetizerContainer);

  const entreeContainer = document.createElement("div");
  entreeContainer.classList.add("menu-item-container");
  createTextElement("h3", "Entrees", menuItemContainer);
  menuItemContainer.appendChild(entreeContainer);

  const dessertContainer = document.createElement("div");
  dessertContainer.classList.add("menu-item-container");
  createTextElement("h3", "Desserts", menuItemContainer);
  menuItemContainer.appendChild(dessertContainer);

  const itemOne = createMenuItem(appetizerContainer);
  createTextElement("h4", "Hummus", itemOne);
  createTextElement(
    "p",
    "Pureed chick peas, tahini and lemon, garnished with parsley, olive oil and diced tomatoes",
    itemOne
  );
  const itemTwo = createMenuItem(appetizerContainer);
  createTextElement("h4", "Garlic Feta Fries", itemTwo);
  createTextElement(
    "p",
    "French fries mixed in our homemade garlic sauce and feta cheese",
    itemTwo
  );
  const itemThree = createMenuItem(appetizerContainer);
  createTextElement("h4", "Crispy Calamari", itemThree);
  createTextElement(
    "p",
    "Calamari seasoned just to perfection, served with spicy tahini sauce",
    itemThree
  );
  const itemFour = createMenuItem(appetizerContainer);
  createTextElement("h4", "Spanakopita", itemFour);
  createTextElement(
    "p",
    "Classic spanakopita (spinach and cheese wrapped in phyllo dough)",
    itemFour
  );

  const itemFive = createMenuItem(entreeContainer);
  createTextElement("h4", "Stuffed Peppers", itemFive);
  createTextElement(
    "p",
    "Red peppers stuffed with rice, garbanzo beans, tomatoes and onions in tomato sauce",
    itemFive
  );
  const itemSix = createMenuItem(entreeContainer);
  createTextElement("h4", "Mixed Grill", itemSix);
  createTextElement(
    "p",
    "Mixed grill comes with two skewers: one lamb & one chicken served with rice and a side salad",
    itemSix
  );
  const itemSeven = createMenuItem(entreeContainer);
  createTextElement("h4", "Gyros Platter", itemSeven);
  createTextElement(
    "p",
    "juicy gyros cooked to perfection, served with rice, side salad & tzatziki sauce",
    itemSeven
  );
  const itemEight = createMenuItem(entreeContainer);
  createTextElement("h4", "Chicken Kabab", itemEight);
  createTextElement(
    "p",
    "Chicken tenders marinated in garlic, olive oil and Mediterranean spices",
    itemEight
  );
  const itemNine = createMenuItem(dessertContainer);
  createTextElement("h4", "Baklava", itemNine);
  createTextElement(
    "p",
    "Homemade simple syrup, paper thin phyllo dough, butter and walnuts topped with pistachio nuts",
    itemNine
  );
  const itemTen = createMenuItem(dessertContainer);
  createTextElement("h4", "Tiramisu", itemTen);
  createTextElement(
    "p",
    "Ladyfingers dipped in coffee, layered with a whipped mixture of egg yolks & mascarpone",
    itemTen
  );

  allowMenuSwitches();
}

export { createMenu };
