import { useCity } from "./cityDataProvider.js"
import { icelandCity } from "./city.js"
export const cityList = () => {
    const contentElement = document.querySelector(".cities__list")
    const cityToVisit = useCity()
    for (const city of cityToVisit) {
        const cityHTML = icelandCity(city)
        contentElement.innerHTML += cityHTML
    }
}

/* in the for/of loop... best to not pluralize newly named variable (i.e. cities 
    rather than city) it helps signal will be passing in single item at a time  
*/


/*  += is important to use += rather than simply one or the other otherwise
the first added item will be replace with the next and so on and so forth
*/


/* can use console.log(city) at the beginning of the for/of loop as a method to check
    in the browser console what it is producing...string, array, object, etc. but not
    necessary to keep in this particular code 
*/
