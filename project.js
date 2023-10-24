let swData = [
    {key:'1', name:'Luke Skywalker', side: 'light'},
    {key:'11', name: 'Anakin Skywalker', side: 'Dark'},
    {key:'5', name:'Princess Leia', side: 'light'},
    {key:'10', name:'Obi-Wan Kenobi', side: 'light'},
    {key:'14', name:'Han Solo', side: 'light'},
    {key:'13', name:'Chewbacca', side: 'light'},
    {key:'4', name:'Darth Vader', side: 'Dark'},
    {key:'21', name:'Palpatine', side: 'Dark'}
];
const getCharacters = async (swapiId) => {
    let request = "https://swapi.dev/api/people/" + swapiId;
    let requestOptions = {
        method:"GET"
    };
    const response = await fetch(request,requestOptions)  
    let result = await response.json();
    console.log(result);
    displayInfo(result);
};
function addToSelectableCharacters(side){
    var cInfo = document.getElementById("CharacterInfo");
    cInfo.innerHTML ="";
    if (side ==null) {
        swData.forEach(person => {
            cInfoBox = document.getElementById("CharacterInfo");
            var opt = document.createElement("option");
            opt.value = person.key;
            opt.innerHTML = person.name;
            cInfoBox.appendChild(opt);
        });
    }
    else if (side=='light') {
        swData.forEach(person => {
            if (person.side == 'light') {
                cInfoBox = document.getElementById("CharacterInfo");
            var opt = document.createElement("option");
            opt.value = person.key;
            opt.innerHTML = person.name;
            cInfoBox.appendChild(opt);
            }
        });
    }
    else if (side=='Dark') {
        swData.forEach(person => {
            if (person.side == 'Dark') {
                cInfoBox = document.getElementById("CharacterInfo");
            var opt = document.createElement("option");
            opt.value = person.key;
            opt.innerHTML = person.name;
            cInfoBox.appendChild(opt);
            }
        });
    }

};



function switchSides() {
    forceSides = document.getElementById('Sides').value;
    switch(forceSides){
        case 'all':
            addToSelectableCharacters(null);
            break;
        case 'lightSide':
            addToSelectableCharacters('light');
            break;
        case 'darkSide':
            addToSelectableCharacters('Dark');
            break;

    }
};

function selectCharacter() {
    let selection = document.getElementById("CharacterInfo").value;
    getCharacters(selection);
    // take value pass thru getCharacters 
    //create method that displays info from get characters
    //create reset function or something that clears data
    console.log(selection);

};


const factDiv = document.getElementById('starWarFacts');


const reset = () => {
    factDiv.innerHTML = "";
 };


function displayInfo(characterJson) {
    reset();
    //let factDiv = document.getElementById('starWarFacts');
    let article= document.createElement('article');
    let h3 = document.createElement('h3');
    let height = document.createElement('li');
    let gender = document.createElement('li');
    let birthYear = document.createElement('li');
    let mass = document.createElement('li');
    h3.textContent = characterJson.name;
    gender.textContent = "Gender: " + characterJson.gender;
    height.textContent = "Height: " + characterJson.height;
    mass.textContent = "Mass: " + characterJson.mass;
    birthYear.textContent = "Birth Year: " + characterJson.birth_year;
    article.appendChild(h3);
    article.appendChild(gender);
    article.appendChild(height);
    article.appendChild(mass);
    article.appendChild(birthYear); 
    factDiv.appendChild(article);
};

document.querySelector("#Sides").addEventListener('change', () =>{
    switchSides()
});



document.querySelector("#CharacterInfo").addEventListener("change", () => {
    selectCharacter()
});

