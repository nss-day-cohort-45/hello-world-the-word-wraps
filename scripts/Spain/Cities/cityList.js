import { useCity } from "./cityDataProvider.js"
import { spainCity } from "./city.js"

export const cityList = () => {
    const contentElement = document.querySelector(".cities")

    const sittyToVisit = useCity()
    for (const city of sittyToVisit) {
        console.log(city)
        const cityHTML = spainCity(city)
        contentElement.innerHTML += cityHTML
    }
}