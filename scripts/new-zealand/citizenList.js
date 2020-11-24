import { useCitizen } from "./citizenDataProvider.js"
import { zealandCitizen } from "./citizen.js"

export const citizenList = () => {
    const contentElement = document.querySelector(".citizen__list")

    const peopleToSee = useCitizen()
    for (const citizen of peopleToSee) {
        const citizenHTML = zealandCitizen(citizen)
        contentElement.innerHTML += citizenHTML
    }
}