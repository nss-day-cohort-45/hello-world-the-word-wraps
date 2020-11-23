import { useCitizen } from "./citizensDataProvider.js"
import { canadaCitizen } from "./citizens.js"
export const citizensList = () => {
    const contentElement = document.querySelector(".info__citizens")
    const citizensInCanada = useCitizen()
    for (const citizen of citizensInCanada) {
        console.log(citizen)
        const citizenHTML = canadaCitizen(citizen)
        contentElement.innerHTML += citizenHTML
    }
}