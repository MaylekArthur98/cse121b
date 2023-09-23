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
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt','Proflie image of ${profilePicture}');




/* Step 5 - Array */
let favoriteFoods = ['Burgers', 'Chicken', 'French Fries',"Rice"];
foodElement.innerHTML = `<strong>${favoriteFoods}</strong>`; 
let forgottenFood = "Pulled Pork";
favoriteFoods.push(forgottenFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

