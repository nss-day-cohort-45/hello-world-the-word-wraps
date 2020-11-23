import { useCitizen } from "./citizenDataProvider.js"
import { zealandCitizen } from "./citizen.js"

export const citizenList = () => {
    const contentElement = document.querySelector(".country__famousPeople")

    const peopleToSee = useCitizen()
    for (const citizen of peopleToSee) {
        const citizenHTML = zealandCitizen(citizen)
        contentElement.innerHTML += citizenHTML
    }
}