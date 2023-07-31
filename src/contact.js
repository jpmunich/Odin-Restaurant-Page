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

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = 'Phone: 555-555-5555';
    const email = document.createElement('p');
    email.innerText = 'greeksgyros@gmail.com';
    const address = document.createElement('p');
    address.innerText = '543 W St';
    const location = document.createElement('p');
    location.innerText = 'Mykonos, Greece, 84600';

     contactPageContainer.appendChild(phoneNumber);
     contactPageContainer.appendChild(email);
     contactPageContainer.appendChild(address);
     contactPageContainer.appendChild(location);

     const employmentPage = createEmploymentPage();
     contactPageContainer.appendChild(employmentPage);

    document.querySelector('[data-button-type="home"]').addEventListener('click', () => {
        openNewTab('.contact-page-container', 'home');
    })

    document.querySelector('[data-button-type="menu"]').addEventListener('click', () => {
        openNewTab('.contact-page-container', 'menu');
    })
}

function createEmploymentPage() {
    const employmentPageContainer = document.createElement('div');
    employmentPageContainer.classList.add('employment-page-container');

    const employmentHeading = document.createElement('h3');
    const employmentPhoneNumber = document.createElement('p');
    const employmentEmail = document.createElement('p');

    employmentHeading.innerText = 'Now Hiring!';
    employmentPhoneNumber.innerText = 'Employment Phone Number: 555-555-5554';
    employmentEmail.innerText = 'greeksgyrosjobs@gmail.com';

    employmentPageContainer.appendChild(employmentHeading);
    employmentPageContainer.appendChild(employmentPhoneNumber);
    employmentPageContainer.appendChild(employmentEmail);

    return employmentPageContainer;

}

export { createContactPage };