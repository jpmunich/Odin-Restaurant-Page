import { createHomePage } from "./home";
import { createContactPage } from "./contact";
import { createMenu } from "./menu";

function createPageHeader() {
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
}

const createLink = (parent, text, className, dataAttribute) => {
    const a = document.createElement('button');
    a.innerText = text;
    a.classList.add(className);
    parent.appendChild(a);
    a.dataset.buttonType = dataAttribute;
    return a;
}

function destroyPage(page) {
    document.querySelector(page).remove();
}

function openPage(page) {
    if (page === 'home') createHomePage();
    if (page === 'menu') {createPageHeader(); createMenu();}
    if (page === 'contact') {createPageHeader(); createContactPage();} 
}

function openNewTab(tabToDelete, tabToOpen) {
    destroyPage(tabToDelete);
    if (document.querySelector('.menu-overlay') !== null) document.querySelector('.menu-overlay').remove();
    openPage(tabToOpen);
}

export { createLink, destroyPage, openPage, openNewTab };