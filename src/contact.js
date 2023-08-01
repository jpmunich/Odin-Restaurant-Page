import { openNewTab } from "./element-creator";
import contactBackground from './contact-background.jpg';

function createContactPage() {
    document.getElementById('content').style.backgroundImage = `url(${contactBackground})`;
    const contactPageContainer = document.createElement('div');
    contactPageContainer.classList.add('contact-page-container');
    document.getElementById('content').appendChild(contactPageContainer);

    const contactHeading = document.createElement('h2');
    contactHeading.innerText = 'Contact Us!';
    contactPageContainer.appendChild(contactHeading);

    createText('Phone: 555-555-5555', contactPageContainer);
    createText('greeksgyros@gmail.com', contactPageContainer);
    createText('543 W St', contactPageContainer);
    createText('Mykonos, Greece, 84600', contactPageContainer);

     const employmentPage = createEmploymentPage();
     contactPageContainer.appendChild(employmentPage);

    document.querySelector('[data-button-type="home"]').addEventListener('click', () => {
        openNewTab('.contact-page-container', 'home');
    })

    document.querySelector('[data-button-type="menu"]').addEventListener('click', () => {
        openNewTab('.contact-page-container', 'menu');
    })
}

function createText(text, parent) {
    const element = document.createElement('p');
    element.innerText = text;
    parent.appendChild(element);
}

function createEmploymentPage() {
    const employmentPageContainer = document.createElement('div');
    employmentPageContainer.classList.add('employment-page-container');

    const employmentHeading = document.createElement('h3');
    employmentHeading.innerText = 'Now Hiring!';
    employmentPageContainer.appendChild(employmentHeading);

    createText('Now Hiring!', employmentPageContainer);
    createText('Employment Phone Number: 555-555-5554', employmentPageContainer);
    createText('greeksgyrosjobs@gmail.com', employmentPageContainer);

    return employmentPageContainer;
}

export { createContactPage };