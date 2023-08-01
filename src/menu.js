import { openNewTab, createTextElement } from "./element-creator";

function allowMenuSwitches() {
    document.querySelector('[data-button-type="home"]').addEventListener('click', () => {
        openNewTab('.menu-overlay', 'home');
    })

    document.querySelector('[data-button-type="contact"]').addEventListener('click', () => {
        openNewTab('.menu-overlay', 'contact');
    })
}

function createMenu() {
    document.getElementById('content').style.backgroundImage = 'url(./background-img.jpg)';

    const menuPageContainer = document.createElement('div');
    menuPageContainer.classList.add('menu-page-container');
    document.getElementById('content').appendChild(menuPageContainer);

    createTextElement('h2', 'Menu', menuPageContainer);

    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item-container');
    menuPageContainer.appendChild(menuItemContainer);

    for (let i = 0; i < 10; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerText = 'Hello';
        menuItemContainer.appendChild(menuItem);
    }
}

export { createMenu };