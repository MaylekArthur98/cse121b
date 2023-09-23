/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
/* Step 2 - Variables */
let fullName = "Maylek Arthur";
let currentYear = '2023';
let profilePicture = 'images/image.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `<strong>${currentYear}</strong>`;
imageElement.setAttribute('scr', profilePicture);





/* Step 5 - Array */






