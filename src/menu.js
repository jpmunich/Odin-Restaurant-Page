import { createHomePage, createLink } from "./home";
export default function createMenu() {
    const title = document.createElement('h1');
    title.innerText = 'Greeks Gyros';
    title.classList.add('menu-title');

    const menuOverlay = document.createElement('div');
    menuOverlay.classList.add('menu-overlay');

    const linkContainer = document.createElement('div')
    linkContainer.classList.add('link-container');

    document.getElementById('content').appendChild(menuOverlay);
    menuOverlay.appendChild(title);
    menuOverlay.appendChild(linkContainer);

    createLink(linkContainer, 'Home', 'link', 'home');
    createLink(linkContainer, 'Menu', 'link', 'menu');
    createLink(linkContainer, 'Contact', 'link', 'contact');

    document.querySelector('[data-button-type="home"]').addEventListener('click', () => {
        destroyMenuPage();
        createHomePage();
    })
}

function destroyMenuPage() {
    document.querySelector('.menu-overlay').remove();
}