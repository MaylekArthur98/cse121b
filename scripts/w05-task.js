/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeslist = {};
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.array.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3 = temple.templeName;
        let img = document.createElement('img');
        img.src = temple.imangeURL;
        img.alt = temple.location;

    });
};


/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
