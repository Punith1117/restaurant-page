let contact = document.createElement('div');
contact.classList.add('contact-content');

let phoneSection = document.createElement('div');
phoneSection.classList.add('phone-section');
let phoneSectionHeading = document.createElement('p');
phoneSectionHeading.classList.add('heading');
phoneSectionHeading.textContent = 'Phone Numbers:';
let phoneNumbers = document.createElement('div');
phoneNumbers.classList.add('phone-numbers');
phoneNumbers.textContent = '1231231234, 1231231234';
phoneSection.appendChild(phoneSectionHeading);
phoneSection.appendChild(phoneNumbers);

let emailSection = document.createElement('div');
emailSection.classList.add('email-section');
let emailSectionHeading = document.createElement('p');
emailSectionHeading.classList.add('heading');
emailSectionHeading.textContent = 'Emails:';
let emails = document.createElement('div');
emails.classList.add('emails');
emails.textContent = 'baloobal@gmail.co, baloo@baloo.com';
emailSection.appendChild(emailSectionHeading);
emailSection.appendChild(emails);

contact.appendChild(phoneSection);
contact.appendChild(emailSection);
export { contact }; 