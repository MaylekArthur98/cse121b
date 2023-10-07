/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Maylek Arthur",
    photo: profilePicture,
    favoriteFoods: [
        'rice',
        'chicken', 
        'fish'
    ],
    hobbies: [
        'video games',
        'comics',
        'working-out'
    ],
    placesLived:[],
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Barbados',
        length: '1 year'
    }
);
myProfile.placesLived.push(
    {
        place: 'Maryland',
        length: '10+ years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Pennsylvania',
        length: '1 year and 6 months'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
let photo = document.querySelector('#photo');
photo.setAttribute("src",myProfile.photo);
photo.setAttribute('alt',myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food=> {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */


