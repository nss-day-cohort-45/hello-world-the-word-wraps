import { useCitizens } from './citizensDataProvider.js'
import { Citizens } from './citizens.js'

export const citizensList = () => {
    const contentElement = document.querySelector('.citizens__list')
    const notableCitizens = useCitizens()

    for (const citizens of notableCitizens) {
        console.log(citizens)
        const citizensHTML = Citizens(citizens)
        contentElement.innerHTML += citizensHTML
    }
}


