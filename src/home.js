export default function createHomePage() {
    const titleOverlay = document.createElement('div');
    const title = document.createElement('h1');
    const linkContainer = document.createElement('div');
    const homeLink = createLink('Home');
    const menuLink = createLink('Menu');
    const contactLink = createLink('Contact');

    linkContainer.classList.add('link-container');
    titleOverlay.classList.add('title-overlay');
    title.innerText = 'Greeks Gyros and More!';
    document.getElementById('content').appendChild(titleOverlay);
    titleOverlay.appendChild(title);
    titleOverlay.appendChild(linkContainer);
    linkContainer.appendChild(homeLink);
    linkContainer.appendChild(menuLink);
    linkContainer.appendChild(contactLink);
}

const createLink = text => {
    const a = document.createElement('button');
    a.innerText = text;
    a.classList.add('link');
    return a;
}