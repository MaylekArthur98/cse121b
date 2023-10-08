/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Maylek Arthur",
    photo: profilePicture = 'images/image.jpg',
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
        place: 'Greenbelt, MD',
        length: '2 years',
    },
    {
        place: 'Silver Spring, MD',
        length: '10+ years'
    },
    {
        place: 'York, PA',
        length: '2 & 1/2 years'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
let photo = document.querySelector('#photo');
photo.setAttribute('src',myProfile.photo);
photo.setAttribute('alt',myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food=> {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('li');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived =>{
    let dt = document.createElement('dt');
    dt.textContent = placesLived.place;
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = placesLived.length;
    document.querySelector('#places-lived').appendChild(dd);
});
//myProfile.placesLived.forEach(placesLived =>{
    //let dd = document.createElement('dd');
    //dd.textContent = placesLived.length;
    //document.querySelector('#places-lived').appendChild(dd);
//-});
//myProfile.placesLived.forEach(length =>{
    //let dd = document.createElement('dd');
    //dd.textContent = length
    //document.querySelector('#places-lived').appendChild(dd);
//});

