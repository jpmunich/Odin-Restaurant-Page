import { openNewTab } from "./element-creator";

function createContactPage() {
    const contactPageContainer = document.createElement('div');
    contactPageContainer.classList.add('contact-page-container');
    document.getElementById('content').appendChild(contactPageContainer);

    document.querySelector('[data-button-type="home"]').addEventListener('click', () => {
        openNewTab('.contact-page-container', 'home');
    })

    document.querySelector('[data-button-type="menu"]').addEventListener('click', () => {
        openNewTab('.contact-page-container', 'menu');
    })
}

export { createContactPage };