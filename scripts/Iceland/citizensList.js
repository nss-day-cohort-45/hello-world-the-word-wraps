import { useCitizens } from './citizensDataProvider.js'
import { Citizens } from './citizens.js'

export const citizensList = () => {
    const contentElement = document.querySelector('.citizens__list')
    const notableCitizens = useCitizens()

    for (const citizen of notableCitizens) {
        const citizensHTML = Citizens(citizen)
        contentElement.innerHTML += citizensHTML
    }
}

/* in the for/of loop... best to not pluralize newly named variable (i.e. citizens 
    rather than citizen) it helps signal will be passing in single item at a time  
*/


/*  += is important to use += rather than simply one or the other otherwise
the first added item will be replace with the next and so on and so forth
*/


/* can use console.log(citizen) at the beginning of the for/of loop as a method to check
    in the browser console what it is producing...string, array, object, etc. but not
    necessary to keep in this particular code 
*/


