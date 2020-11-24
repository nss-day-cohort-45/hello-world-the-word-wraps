import { useLandmark } from "./landmarkDataProvider.js"
import { zealandLandmark } from "./landmark.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".landmark__list")

    const placesToVisit = useLandmark()
    for (const landmark of placesToVisit) {
        const landmarkHTML = zealandLandmark(landmark)
        contentElement.innerHTML += landmarkHTML
    }
}