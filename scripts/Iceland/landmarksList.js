import { useLandmarks } from './landmarksDataProvider.js'
import { icelandLandmarks } from './landmarks.js'

export const landmarksList = () => {
    const contentElement = document.querySelector(".landmarks__list")
    const landmarksToVisit = useLandmarks()

    for (const landmark of landmarksToVisit) {
        const landmarkHTML = icelandLandmarks(landmark)
        contentElement.innerHTML += landmarkHTML
    }
}

/* in the for/of loop... best to not pluralize newly named variable (i.e. landmarks 
    rather than landmark) it helps signal will be passing in single item at a time  
*/


/*  += is important to use += rather than simply one or the other otherwise
the first added item will be replace with the next and so on and so forth
*/


/* can use console.log(landmark) at the beginning of the for/of loop as a method to check
    in the browser console what it is producing...string, array, object, etc. but not
    necessary to keep in this particular code 
*/

