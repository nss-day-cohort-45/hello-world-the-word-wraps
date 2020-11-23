import { useCitizens } from "./citizensDataProvider.js"
import { spainCitizen } from "./citizens.js"

export const citizensList = () => {
    const contentElement = document.querySelector(".citizens")

    const famousCitizens = useCitizens()
    for (const citizen of famousCitizens) {
        console.log(citizen)
        const citizenHTML = spainCitizen(citizen)
        contentElement.innerHTML += citizenHTML
    }
}