import createMenu from "./menu";

function createHomePage() {
    const titleOverlay = document.createElement('div');
    const title = document.createElement('h1');
    const linkContainer = document.createElement('div');

    linkContainer.classList.add('link-container');
    titleOverlay.classList.add('title-overlay');
    title.innerText = 'Greeks Gyros and More!';

    document.getElementById('content').appendChild(titleOverlay);
    titleOverlay.appendChild(title);
    titleOverlay.appendChild(linkContainer);
    createLink(linkContainer, 'Home', 'link', 'home');
    createLink(linkContainer, 'Menu', 'link', 'menu');
    createLink(linkContainer, 'Contact', 'link', 'contact');

    document.querySelector('[data-button-type="menu"]').addEventListener('click', () => {
        destroyHomePage();
        createMenu();
    })
    
}

function destroyHomePage() {
    document.querySelector('.title-overlay').remove();
}


const createLink = (parent, text, className, dataAttribute) => {
    const a = document.createElement('button');
    a.innerText = text;
    a.classList.add(className);
    parent.appendChild(a);
    a.dataset.buttonType = dataAttribute;
    return a;
}

export { createHomePage, createLink };