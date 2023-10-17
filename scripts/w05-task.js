/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templelist = {};
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templelist = await response.json();
    displayTemples(templelist);
    //console.log('TEMPLE DATA:', templelist);
}
getTemples();
/* reset Function */
const reset = () => {
    temples.innerHTML = "";
 };


/* sortBy Function */
const sortBy = (temples) => {
    reset();

    let filter = document.getElementById('sortBy');
    switch(filter.value) {
        case 'utah':
            displayTemples(temples.filter((temple) => {
                return (temple.location.includes("Utah"));
                
            }));       
            break;
        case 'notutah':
            displayTemples(temples.filter((temple) => {
                return (!temple.location.includes("Utah"))
            }));
            break;
        case 'older':
            displayTemples(temples.filter((temple) => {
                var date = new Date(1950, 0, 1); 
                return date > new Date(temple.dedicated);
            }));
            break;
        case 'all':
            displayTemples(temples);
            break;

    };
}
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templelist)});


/* Event Listener */
