import { openNewTab, createTextElement } from "./element-creator";
import contactBackground from './contact-background.jpg';

function createEmploymentPage() {
    const employmentPageContainer = document.createElement('div');
    employmentPageContainer.classList.add('employment-page-container');

    createTextElement('h3', 'Now Hiring!', employmentPageContainer)
    createTextElement('p', 'Employment Phone Number: 555-555-5554', employmentPageContainer);
    createTextElement('p', 'greeksgyrosjobs@gmail.com', employmentPageContainer);

    return employmentPageContainer;
}

function allowMenuSwitches() {
    document.querySelector('[data-button-type="home"]').addEventListener('click', () => {
        openNewTab('.contact-page-container', 'home');
    })

    document.querySelector('[data-button-type="menu"]').addEventListener('click', () => {
        openNewTab('.contact-page-container', 'menu');
    })
}

function createContactPage() {
    document.getElementById('content').style.backgroundImage = `url(${contactBackground})`;

    const contactPageContainer = document.createElement('div');
    contactPageContainer.classList.add('contact-page-container');
    document.getElementById('content').appendChild(contactPageContainer);

    createTextElement('h2', 'Contact Us!', contactPageContainer);
    createTextElement('p', 'Phone: 555-555-5555', contactPageContainer);
    createTextElement('p', 'greeksgyros@gmail.com', contactPageContainer);
    createTextElement('p', '543 W St', contactPageContainer);
    createTextElement('p', 'Mykonos, Greece, 84600', contactPageContainer);

     const employmentPage = createEmploymentPage();
     contactPageContainer.appendChild(employmentPage);

     allowMenuSwitches();
}

export { createContactPage };