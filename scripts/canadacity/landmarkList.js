import { useLandmark } from "./landmarkDataProvider.js"
import { canadaLandmark } from "./landmark.js"
export const landmarkList = () => {
    const contentElement = document.querySelector(".info__landmarks")
    const landmarkToVisit = useLandmark()
    for (const landmark of landmarkToVisit) {
        console.log(landmark)
        const landmarkHTML = canadaLandmark(landmark)
        contentElement.innerHTML += landmarkHTML
    }
}