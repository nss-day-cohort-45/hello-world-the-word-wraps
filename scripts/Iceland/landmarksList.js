import { useLandmarks } from './landmarksDataProvider.js'
import { icelandLandmarks } from './landmarks.js'

export const landmarksList = () => {
    const contentElement = document.querySelector(".landmarks__list")
    const landmarksToVisit = useLandmarks()

    for (const landmark of landmarksToVisit) {
        console.log(landmark)
        const landmarkHTML = icelandLandmarks(landmark)
        contentElement.innerHTML += landmarkHTML
    }
}
