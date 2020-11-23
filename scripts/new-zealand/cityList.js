import { useCity } from "./cityDataProvider.js"
import { zealandCity } from "./city.js"

export const cityList = () => {
    const contentElement = document.querySelector(".cities__list")

    const citiesToVisit = useCity()
    for (const city of citiesToVisit) {
        const cityHTML = zealandCity(city)
        contentElement.innerHTML += cityHTML
    }
}