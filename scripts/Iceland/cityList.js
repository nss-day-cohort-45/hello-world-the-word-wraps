import { useCity } from "./cityDataProvider.js"
import { icelandCity } from "./city.js"
export const cityList = () => {
    const contentElement = document.querySelector(".cities__list")
    const cityToVisit = useCity()
    for (const city of cityToVisit) {
        console.log(city)
        const cityHTML = icelandCity(city)
        contentElement.innerHTML += cityHTML
    }
}