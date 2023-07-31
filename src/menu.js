import { openNewTab } from "./element-creator";

function createMenu() {
    document.getElementById('content').style.backgroundImage = 'url(./background-img.jpg)';

    document.querySelector('[data-button-type="home"]').addEventListener('click', () => {
        openNewTab('.menu-overlay', 'home');
    })

    document.querySelector('[data-button-type="contact"]').addEventListener('click', () => {
        openNewTab('.menu-overlay', 'contact');
    })
}

export { createMenu };