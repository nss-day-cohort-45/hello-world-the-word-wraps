import { useLandmarks } from "./landmarkDataProvider.js"
import { spainLandmark } from "./landmarks.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".landmarks")

    const landmarksToVisit = useLandmarks()
    for (const landmark of landmarksToVisit) {
        console.log(landmark)
        const landmarkHTML = spainLandmark(landmark)
        contentElement.innerHTML += landmarkHTML
    }
}